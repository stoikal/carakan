import Text from './text';

export default function toJavaneseScript(src) {
  const text = new Text(src)

  return text.toJavanese()
} 