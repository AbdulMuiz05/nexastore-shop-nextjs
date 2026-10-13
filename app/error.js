'use client';

export default function Error({ reset }) {
  return <div className="container error-state"><span className="eyebrow">A SMALL SNAG</span><h1>That didn't go <em>to plan.</em></h1><p>Something unexpected happened. Give it another try.</p><button className="button button-dark" onClick={() => reset()}>Try again <span>↻</span></button></div>;
}
