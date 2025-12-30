import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export function useAudioPlayer() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
    });

    return () => {
      sound?.unloadAsync();
    };
  }, [sound]);

  const play = async (id: number, uri: string) => {
    // Toggle same song
    if (currentId === id && sound) {
      const status = await sound.getStatusAsync();
      if (!status.isLoaded) return;

      if (status.isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
      return;
    }

    // Stop previous
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) await sound.stopAsync();
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: true }
    );

    setSound(newSound);
    setCurrentId(id);
    setIsPlaying(true);
  };

  return { play, currentId, isPlaying };
}
