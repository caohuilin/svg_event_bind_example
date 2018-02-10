import * as React from 'react'


export default function() {
  return (
    <defs>
      <filter x="-52.5%" y="-52.5%" width="205.0%" height="205.0%" filterUnits="objectBoundingBox" id="filter-2">
        <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
        <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
        <feGaussianBlur stdDeviation="12.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
        <feColorMatrix values="0 0 0 0 0.970775187   0 0 0 0 0.907238424   0 0 0 0 0.109462149  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"/>
      </filter>
    </defs>
  )
}
