import * as React from 'react'


export default function() {
  return (
    <defs>
      <filter x="-33.4%" y="-33.4%" width="166.9%" height="166.9%" filterUnits="objectBoundingBox" id="circle-filter-2">
        <feMorphology radius="3.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
        <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
        <feColorMatrix values="0 0 0 0 0.2   0 0 0 0 0.329411765   0 0 0 0 0.611764706  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>
    </defs>
  )
}
