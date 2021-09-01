import Text from './Text';

export default function toJavaneseScript(src: string) {
  const text = new Text(src)

  return text.toJavanese()
} 