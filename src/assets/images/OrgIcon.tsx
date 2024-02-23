import React from 'react';

export type OrgIconProps = {
  className?: string;
};

export const OrgIconSVG = ({ className }: OrgIconProps) => {
  return (
    <svg
      className={className}
      width="78"
      height="104"
      viewBox="0 0 78 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.3142 86.8076C75.8024 86.8519 76.1862 86.8629 76.5616 86.9294C77.3941 87.0733 77.8936 87.5576 77.919 88.4017C77.9501 89.47 77.9388 90.5411 77.919 91.6122C77.9134 91.8419 77.8598 92.1242 77.7158 92.2902C76.2878 93.9674 77.3179 95.9269 77.0357 97.7341C78.4919 98.9962 77.8456 100.679 77.919 102.198C77.9783 103.399 77.3433 103.972 76.1072 103.983C73.5023 104.006 70.8947 104.006 68.287 103.983C67.0396 103.972 66.4695 103.408 66.4413 102.218C66.4187 101.321 66.4272 100.421 66.4413 99.5248C66.4469 99.2535 66.4159 98.8716 66.5768 98.7277C67.8354 97.6124 67.2484 96.1621 67.3416 94.8503C67.4036 93.9536 67.5617 93.007 66.6755 92.2875C66.4667 92.1186 66.461 91.6509 66.4441 91.316C66.4102 90.6269 66.4328 89.935 66.4328 89.2431C66.4328 87.458 66.5796 87.2643 68.2898 86.7605C67.302 84.5243 66.2635 82.313 65.3406 80.0546C63.478 75.4936 61.9936 70.8219 61.5166 65.9038C61.1272 61.8852 61.2485 57.8777 63.7094 54.4514C64.8524 52.8601 64.5674 51.2742 64.6097 49.633C64.6153 49.3839 64.3501 49.0795 64.1356 48.8802C53.5468 39.1521 47.5638 27.0189 44.753 13.2278C44.6627 12.7906 44.5723 12.3533 44.4849 11.9298C42.9298 13.0009 41.4002 14.0332 39.8932 15.096C39.2046 15.5831 38.6006 15.6274 37.8866 15.1154C36.3881 14.0388 34.8472 13.0203 33.2978 11.9603C32.8039 14.0332 32.3524 16.1532 31.7936 18.2483C28.6271 30.102 22.7711 40.4252 13.6386 48.8885C13.3282 49.1764 13.1984 49.6939 13.0939 50.1284C13.0065 50.4882 13.1109 50.8867 13.0685 51.2631C12.9387 52.4145 13.3141 53.3388 13.9857 54.3158C16.2632 57.6259 16.6216 61.3926 16.2802 65.2479C15.6424 72.4741 13.046 79.1247 9.92747 85.6147C9.7525 85.9801 9.56906 86.3454 9.38279 86.7246C11.4825 87.2421 11.5587 87.3445 11.5587 89.5143C11.5587 90.1702 11.5813 90.8289 11.5417 91.4821C11.5248 91.781 11.4656 92.1325 11.2906 92.3539C9.9444 94.0587 10.9096 95.9961 10.681 97.8088C12.1457 99.0377 11.4402 100.695 11.5333 102.176C11.6095 103.377 10.9688 103.964 9.74121 103.975C7.09966 104 4.45812 104 1.81657 103.975C0.653843 103.964 0.092233 103.375 0.0611892 102.226C0.0357897 101.293 0.0386119 100.361 0.0668335 99.4279C0.0753 99.129 0.117632 98.7637 0.295429 98.5506C1.70933 96.8623 0.667954 94.9084 0.950171 93.1039C-0.4468 91.947 0.126099 90.3695 0.0696557 88.9497C0.0075681 87.3556 0.371627 87.0677 2.44027 86.7799C2.44027 86.3924 2.44027 85.9884 2.44027 85.5843C2.44027 70.3541 2.33585 55.124 2.47414 39.8966C2.58703 27.2098 8.2116 17.2796 18.854 10.0977C21.9471 8.01089 25.3478 6.51915 28.9799 5.56155C29.581 5.4038 29.8858 5.15748 30.041 4.5154C30.8623 1.15828 34.7145 -1.37132 38.4454 0.820632C38.6684 0.953478 39.1115 0.917499 39.3598 0.790188C42.8339 -0.992154 46.6833 0.640737 47.657 4.38532C47.8376 5.07999 48.1678 5.36505 48.8395 5.58093C63.9042 10.3938 72.6896 20.4679 75.0545 35.8448C75.3001 37.4417 75.2972 39.0829 75.3001 40.7019C75.317 55.6194 75.3113 70.5396 75.3113 85.457C75.3113 85.8998 75.3113 86.3399 75.3113 86.8048L75.3142 86.8076ZM8.86916 48.4734C9.67912 48.4734 10.379 48.418 11.0676 48.4872C11.9199 48.573 12.49 48.2354 13.0939 47.6708C22.2914 39.0414 27.9413 28.4663 30.9582 16.4466C31.3731 14.7915 31.6976 13.1116 32.0645 11.4455C31.8557 11.4012 31.7879 11.368 31.7259 11.3763C31.5537 11.3984 31.3759 11.4234 31.2094 11.4732C19.3874 14.9797 11.9707 22.6045 9.4985 34.472C8.74781 38.0727 9.04131 41.8837 8.8748 45.6006C8.83247 46.5222 8.86916 47.4494 8.86916 48.4734ZM68.9756 48.4734C68.8542 44.3026 68.9897 40.248 68.572 36.2461C67.3472 24.5612 58.2006 14.3958 46.5704 11.487C46.3221 11.4261 46.0596 11.4261 45.5601 11.3708C46.3701 14.512 47.0276 17.5093 47.9251 20.4375C51.1677 31.0208 56.6681 40.2813 64.9371 47.8784C65.2221 48.1413 65.6144 48.4125 65.9785 48.4457C66.8815 48.526 67.7959 48.4734 68.9756 48.4734ZM46.2092 10.0783C46.5309 10.1696 46.8357 10.2499 47.1377 10.344C59.5298 14.1495 67.2089 22.2475 69.5795 34.7709C70.3218 38.6926 69.9746 42.8109 70.1214 46.8405C70.1411 47.3497 70.1214 47.859 70.1214 48.4014H74.0301C74.0301 45.2989 74.1317 42.2629 74.0131 39.2351C73.5193 26.9026 67.9907 17.3294 57.4245 10.6041C54.4922 8.736 51.2806 7.44906 47.9505 6.60771C47.3578 7.78395 46.8075 8.88546 46.2064 10.0755L46.2092 10.0783ZM7.59919 48.418C7.59919 47.9946 7.59919 47.6237 7.59919 47.2529C7.59919 44.9059 7.58508 42.559 7.60201 40.2121C7.70361 26.6563 16.0036 15.2122 28.8924 10.8615C29.7729 10.5654 30.6732 10.3218 31.534 10.0617C30.9357 8.87992 30.3684 7.75627 29.787 6.60218C29.0392 6.82082 28.2913 7.01178 27.566 7.26087C26.6375 7.57914 25.7034 7.89742 24.8144 8.30149C13.1955 13.5821 6.1232 22.3748 4.19284 34.7986C3.53527 39.0275 3.84571 43.4004 3.71871 47.7068C3.71307 47.9365 3.7554 48.1689 3.77516 48.418H7.59919ZM31.0993 6.15936C31.4436 6.85956 31.8557 8.07454 32.5753 9.08472C34.0683 11.1826 36.1933 12.6245 38.4003 13.9308C38.6486 14.0775 39.1792 14.0637 39.405 13.8976C41.0842 12.6605 42.848 11.4898 44.3212 10.0423C45.2694 9.10963 45.9524 7.80332 46.4237 6.54682C47.0276 4.93054 46.0568 3.00151 44.4256 1.93044C42.9637 0.972851 41.1491 1.00606 39.7098 2.12418C39.1086 2.5919 38.7051 2.64726 38.0757 2.15185C36.755 1.1057 35.2338 0.920266 33.7352 1.71734C32.2 2.53655 31.2828 3.8401 31.0993 6.16212V6.15936ZM8.96229 53.9311V84.3804C10.2266 81.92 11.3244 79.4264 12.2501 76.8719C13.918 72.2749 15.1654 67.5754 15.0836 62.6463C15.0356 59.7791 14.4599 57.0253 12.7017 54.6369C12.4787 54.3352 12.0921 53.9975 11.7506 53.9616C10.8531 53.8675 9.93876 53.9284 8.96511 53.9284L8.96229 53.9311ZM68.8147 54.0418C65.7499 53.6073 65.0951 53.9505 63.9267 56.541C63.7574 56.9174 63.6107 57.3076 63.4808 57.7006C62.4169 60.864 62.4987 64.091 62.9898 67.3236C63.8703 73.1356 65.9277 78.5878 68.397 83.9044C68.4732 84.0677 68.6059 84.2033 68.8147 84.4994V54.0446V54.0418ZM70.127 86.8021H73.9877V53.9256C73.0593 53.9256 72.1816 53.9948 71.318 53.909C70.302 53.8066 70.1045 54.2134 70.1073 55.1323C70.1383 65.3198 70.127 75.5047 70.127 85.6922V86.8021ZM7.59919 86.8131C7.59919 86.4118 7.59919 86.1378 7.59919 85.8638C7.59919 75.5794 7.59919 65.2922 7.59919 55.0077C7.59919 54.8361 7.65845 54.623 7.57943 54.4985C7.43832 54.2798 7.22102 53.9671 7.02064 53.956C5.94258 53.9034 4.86169 53.9311 3.76951 53.9311V86.8131H7.59919ZM9.31506 93.1648H2.3415V97.6898H9.31506V93.1648ZM75.6839 97.7286V93.1399H68.6934V97.7286H75.6839ZM5.82687 102.741C7.02347 102.741 8.22006 102.719 9.41384 102.749C10.0178 102.763 10.3423 102.613 10.3056 101.946C10.2661 101.224 10.2718 100.496 10.3056 99.7739C10.3339 99.1788 10.077 99.0017 9.49568 99.01C7.70361 99.0349 5.90871 99.0183 4.11382 99.0183C1.13079 99.0183 1.14772 99.0183 1.31705 101.971C1.35092 102.55 1.54847 102.76 2.13548 102.749C3.36594 102.721 4.59641 102.741 5.82969 102.741H5.82687ZM72.1929 99.0211H70.5052C67.6125 99.0211 67.6435 99.0211 67.6859 101.85C67.6972 102.622 68.0104 102.766 68.699 102.752C70.4205 102.719 72.1449 102.741 73.8692 102.741C76.8466 102.741 76.8325 102.741 76.6857 99.7905C76.6575 99.2231 76.4882 98.9934 75.8871 99.01C74.6566 99.0432 73.4261 99.0211 72.1929 99.0183V99.0211ZM10.2915 88.1914C9.81458 88.1637 9.43641 88.1222 9.06107 88.1194C7.4101 88.1111 5.75914 88.1167 4.11099 88.1167C0.992503 88.1167 0.978392 88.1167 1.35938 91.1887C1.38761 91.424 1.80246 91.7948 2.04517 91.8004C4.57383 91.8446 7.10249 91.8419 9.62832 91.8004C9.85409 91.7976 10.2492 91.4572 10.2633 91.2524C10.331 90.2643 10.2944 89.2708 10.2944 88.1914H10.2915ZM72.0884 91.828C72.6867 91.828 73.2822 91.828 73.8805 91.828C76.7845 91.828 76.7619 91.828 76.6886 88.994C76.6716 88.3076 76.4261 88.0973 75.7572 88.1084C74.0019 88.136 72.2465 88.1167 70.4911 88.1167C67.6068 88.1167 67.6322 88.1167 67.6887 90.9756C67.7028 91.673 67.9511 91.864 68.6143 91.8391C69.7714 91.8004 70.9313 91.828 72.0913 91.828H72.0884ZM65.9643 52.6137H73.9877V49.788H65.9643V52.6137ZM3.7808 49.7714V52.622H11.7506V49.7714H3.7808Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};