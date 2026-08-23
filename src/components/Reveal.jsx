import { useReveal } from '../hooks/useReveal';

/** Fades/scales a section into view the first time it enters the viewport. */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal();
  const cls = ['reveal', variant === 'zoom' ? 'reveal-zoom' : 'reveal-up', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={cls} style={{ transitionDelay: `${delay}s` }} {...rest}>
      {children}
    </Tag>
  );
}
