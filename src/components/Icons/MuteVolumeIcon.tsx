/* eslint-disable */
import React from 'react'

const MuteVolumeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g id="volume_mute">
      <mask id="mask0_1483_75386" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect id="Bounding box" width="1em" height="1em" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_1483_75386)">
        <path
          id="volume_up_2"
          d="M14.0384 20.1095V18.5595C15.4807 18.1005 16.6425 17.2672 17.5239 16.0595C18.4053 14.8518 18.8461 13.4903 18.8461 11.9749C18.8461 10.4595 18.4053 9.09799 17.5239 7.89031C16.6425 6.68261 15.4807 5.84927 14.0384 5.39031V3.84033C15.8999 4.33905 17.4165 5.33841 18.5883 6.83841C19.7601 8.33839 20.346 10.0506 20.346 11.9749C20.346 13.8993 19.7601 15.6114 18.5883 17.1114C17.4165 18.6114 15.8999 19.6108 14.0384 20.1095ZM3.65381 14.4999V9.49993H7.36531L11.6537 5.21153V18.7883L7.36531 14.4999H3.65381ZM14.0384 15.6537V8.29608C14.7127 8.66275 15.2339 9.17909 15.6018 9.84511C15.9698 10.5111 16.1537 11.2294 16.1537 11.9999C16.1537 12.7602 15.9682 13.4675 15.597 14.122C15.2259 14.7765 14.7063 15.2871 14.0384 15.6537Z"
          fill="currentColor"
        />
        <path id="mute_line" d="M6 21L21 4" stroke="#808080" stroke-width="2" stroke-linecap="round" />
      </g>
    </g>
  </svg>
)

export default MuteVolumeIcon
