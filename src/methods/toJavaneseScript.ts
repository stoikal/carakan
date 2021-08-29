import Text from './text';

export default function toJavaneseScript(src: string) {
  const text = new Text(src)

  return text.toJavanese()
} 