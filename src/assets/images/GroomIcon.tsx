import React from 'react';

export type GroomIconProps = {
  className?: string;
};

export const GroomIconSVG = ({ className }: GroomIconProps) => {
  return (
    <svg
      className={className}
      width="104"
      height="77"
      viewBox="0 0 104 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.373 12.1946C21.7154 11.4009 21.0353 10.6043 20.3776 9.78817C18.7448 7.76598 18.6408 5.4409 20.0769 3.2897C21.4034 1.30117 23.455 0.647677 25.9872 1.35726C26.257 1.43299 26.6646 1.34885 26.8922 1.18057C28.8595 -0.258238 30.9982 -0.395668 32.8503 0.844006C34.975 2.26598 35.8434 4.35267 35.1268 6.73947C34.7614 7.9539 34.1178 9.08699 33.6232 10.2033C35.7141 10.4753 37.9035 10.6548 40.0506 11.0643C44.0808 11.8328 47.8074 13.4062 51.2839 15.5855C51.5875 15.7762 52.1833 15.8575 52.4503 15.6864C57.8407 12.2423 63.7313 10.4865 70.1166 10.3379C70.2122 10.3379 70.3077 10.2958 70.4398 10.2678C69.9677 9.28052 69.4084 8.35217 69.0655 7.34809C67.8711 3.85905 70.2066 0.339161 73.7618 0.182099C75.0433 0.126005 76.1591 0.52988 77.1708 1.318C77.4069 1.50311 77.8622 1.58444 78.1545 1.4975C80.414 0.824373 82.4741 1.40775 83.8034 3.15788C85.2845 5.10994 85.4785 7.38174 84.1407 9.30015C83.4128 10.3435 82.4376 11.2158 81.5523 12.189C85.085 13.4455 88.4519 15.1563 91.3551 17.6217C101.908 26.5827 106.186 37.9529 102.931 51.4014C99.6571 64.9256 90.6525 73.2555 77.0303 76.2425C68.4388 78.1273 60.3279 76.408 52.8522 71.7999C52.1861 71.3904 51.7505 71.382 51.09 71.7999C31.3805 84.2724 4.96241 72.8573 0.606241 50.0018C-2.47961 33.8216 6.45475 18.0732 21.9487 12.3713C22.1735 12.2871 22.3927 12.1862 22.373 12.1946ZM46.7338 20.3562C36.3605 14.1354 21.1898 15.7089 12.2077 26.8912C3.59373 37.6163 4.61954 53.4236 14.5291 62.9707C24.4837 72.5628 38.637 72.1309 46.6973 66.8833C40.5312 60.3652 37.2683 52.6382 37.2599 43.6632C37.2543 34.6518 40.5312 26.894 46.731 20.3562H46.7338ZM57.2196 20.3198C70.0267 33.2606 69.5883 54.4389 57.2505 66.9366C65.752 72.3019 79.8435 72.3861 89.6266 62.6875C99.2074 53.1908 100.157 37.664 91.8637 27.152C82.9828 15.8968 67.902 14.0681 57.2196 20.3198ZM48.0126 21.0238C37.5409 30.857 34.2977 49.5419 45.5113 63.5681C56.8486 77.7514 77.0106 79.7428 91.1724 68.2071C104.775 57.1286 106.607 36.7216 95.1716 23.0908C83.7388 9.46563 64.8134 8.75885 53.1838 16.87C53.9145 17.4814 54.6817 18.0312 55.3338 18.6903C55.9183 19.2792 56.3652 19.3381 57.1212 18.9174C62.2699 16.0651 67.8177 14.9797 73.6522 15.6275C89.7503 17.4113 100.925 32.0322 98.4879 48.0245C96.1103 63.6102 81.0745 74.3718 65.5188 71.3455C54.7014 69.242 47.2172 62.8305 43.8082 52.3494C40.371 41.7869 42.8021 32.2818 50.2834 24.0669C50.5083 23.82 50.7443 23.5788 51.0366 23.2703C49.9518 22.4654 48.9766 21.739 48.0126 21.021V21.0238ZM55.9183 66.3139C67.7334 54.781 69.0908 34.8845 56.6603 21.6744C44.4743 8.72519 23.7782 8.24278 11.0526 20.6087C-1.83883 33.1344 -2.05524 53.6423 10.5636 66.2045C23.3173 78.8986 41.3631 77.2578 50.6937 70.4032C49.9153 69.7469 49.1087 69.127 48.3808 68.4287C47.9142 67.9799 47.5573 67.9995 47.0149 68.294C41.2872 71.4185 35.1998 72.4674 28.7358 71.4661C13.9052 69.1719 3.24524 54.8988 5.29966 40.0284C7.4665 24.3389 21.6564 13.4904 37.3498 15.8042C47.8861 17.358 55.4378 23.2339 59.4426 33.0587C63.4643 42.9284 61.9832 52.3185 55.6513 60.9065C54.8504 61.9947 53.892 62.9679 52.9393 64.0702C53.9426 64.8246 54.9122 65.5538 55.924 66.3139H55.9183ZM51.9865 63.0521C63.8381 51.7379 62.2699 33.471 51.9331 24.2968C40.8797 34.5031 40.8151 52.7448 51.9865 63.0521ZM34.0897 5.64283C34.1375 3.70199 33.0808 2.18184 31.4563 1.51994C30.0146 0.933756 28.5897 1.318 27.3306 2.50438C27.058 2.75961 26.4369 2.9335 26.1165 2.80449C24.0818 1.98552 22.5136 2.22672 21.3697 3.6515C20.0095 5.34554 19.9308 7.24431 21.3388 8.91591C22.092 9.81061 23.0784 10.5174 24.0059 11.2522C24.2307 11.4289 24.6523 11.4542 24.9642 11.4093C27.0018 11.1092 29.0366 10.7726 31.0713 10.4332C31.3355 10.3884 31.684 10.3463 31.8301 10.1696C33.0077 8.75604 33.9576 7.22468 34.0925 5.64003L34.0897 5.64283ZM74.1018 1.16094C74.0484 1.25069 73.9978 1.34044 73.9444 1.43299C71.7186 1.45543 69.6838 3.5337 70.0745 5.71575C70.3162 7.07323 71.0581 8.36619 71.727 9.60586C71.9519 10.0266 72.6151 10.3463 73.1294 10.4529C75.1473 10.8596 77.1877 11.1737 79.2224 11.4962C79.5091 11.5411 79.9222 11.5635 80.0965 11.4009C81.1925 10.394 82.4095 9.45441 83.2554 8.25961C84.2643 6.83202 83.8147 4.93325 82.4966 3.56456C81.378 2.40341 79.7114 2.13136 78.1545 2.9335C77.553 3.24202 77.2242 3.14105 76.6987 2.71193C75.9258 2.08087 74.9759 1.66578 74.1018 1.16094Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};