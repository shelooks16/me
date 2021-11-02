declare module 'read-time-estimate' {
  type EstimatedReadTime = {
    /**
     * Humanized Duration for the input string
     */
    humanizedDuration: string;
    /**
     * 	Actual Duration of the input string (in minutes)
     */
    duration: number;
    /**
     * Number of words in the input string
     */
    totalWords: number;
    /**
     * Read Time of the words in the input string (in minutes)
     */
    wordTime: number;
    /**
     * Number of images in input string
     */
    totalImages: number;
    /**
     * Read Time of the images in the input string (in minutes)
     */
    imageTime: number;
    /**
     * Chinese / Japanese / Korean language characters count
     */
    otherLanguageTimeCharacters: number;
    /**
     * Read Time of the Chinese / Japanese / Korean in the input string (in minutes)
     */
    otherLanguageTime: number;
  };

  export default function estimateTime(
    text: string,
    customWordTime?: number,
    customImageTime?: number,
    chineseKoreanReadTime?: number,
    imageTags?: array
  ): EstimatedReadTime;
}
