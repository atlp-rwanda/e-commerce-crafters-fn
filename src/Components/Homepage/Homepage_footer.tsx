import React from "react";
import logo from "../../asset/images/logo1.png";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary font-outfit text-base md:text-xl text-white pt-8">
      <div className="container mx-auto px-4 md:px-8 border-b border-border pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-description mr-0 md:mr-32">
            <div className="text-lg font-bold mb-6">
              <svg
                width="100"
                height="32"
                viewBox="0 0 100 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.4619 8.76C45.4619 8.4497 45.5818 8.18932 45.8215 7.97875C46.0727 7.75714 46.3751 7.64631 46.729 7.64631H54.5201C54.5201 8.37769 54.3946 8.9096 54.1434 9.24205C53.8923 9.5745 53.4871 9.74072 52.9277 9.74072H47.979V12.2839H52.4653C52.4653 13.0153 52.3398 13.5472 52.0886 13.8797C51.8375 14.2121 51.4323 14.3784 50.8729 14.3784H47.979V17.7527C47.979 18.34 47.7792 18.7667 47.3797 19.0326C46.9916 19.2986 46.3523 19.4315 45.4619 19.4315V8.76ZM59.2419 9.75734H55.1152C55.1152 8.34996 55.7716 7.64631 57.0844 7.64631H65.8686C65.8686 9.05369 65.2122 9.75734 63.8994 9.75734H61.759V17.6696C61.759 18.2458 61.5421 18.6835 61.1084 18.9827C60.686 19.2819 60.0638 19.4315 59.2419 19.4315V9.75734ZM67.2339 8.76C67.2339 8.4497 67.3538 8.18932 67.5935 7.97875C67.8447 7.75714 68.1471 7.64631 68.501 7.64631H76.1551C76.1551 8.37769 76.0297 8.9096 75.7784 9.24205C75.527 9.5745 75.1222 9.74072 74.5626 9.74072H69.751V12.3671H74.2373C74.2373 13.0984 74.1119 13.6303 73.8605 13.9628C73.6092 14.2952 73.2044 14.4615 72.6448 14.4615H69.751V17.1875H74.9222C75.4701 17.1875 75.8694 17.3538 76.1208 17.6862C76.3722 18.0186 76.4975 18.5506 76.4975 19.2819H68.501C68.1471 19.2819 67.8447 19.1767 67.5935 18.9661C67.3538 18.7555 67.2339 18.4896 67.2339 18.1682V8.76ZM78.0366 8.76C78.0366 8.43866 78.1564 8.1727 78.3962 7.96213C78.6468 7.75156 78.9496 7.64631 79.3037 7.64631H83.8071C85.0852 7.64631 86.0674 7.96765 86.7523 8.6104C87.4482 9.24205 87.7968 10.1452 87.7968 11.3198C87.7968 11.9736 87.6599 12.5222 87.3859 12.9655C87.1229 13.4087 86.7119 13.7578 86.153 14.0127V14.0792C87.1462 14.5113 87.6427 15.3258 87.6427 16.5226V17.6696C87.6427 18.2458 87.4256 18.6835 86.9921 18.9827C86.5694 19.2819 85.9475 19.4315 85.1256 19.4315V16.6057C85.1256 16.0517 85.0112 15.6472 84.7831 15.3923C84.566 15.1264 84.229 14.9934 83.7729 14.9934H80.5194V17.6696C80.5194 18.2458 80.3078 18.6835 79.8859 18.9827C79.4633 19.2819 78.8468 19.4315 78.0366 19.4315V8.76ZM83.6701 12.9156C84.1948 12.9156 84.5948 12.7771 84.8688 12.5C85.1427 12.223 85.2797 11.824 85.2797 11.3032C85.2797 10.7602 85.1482 10.3613 84.8859 10.1064C84.6345 9.85156 84.229 9.7241 83.6701 9.7241H80.5194V12.9156H83.6701ZM94.3537 19.4315C92.7551 19.4315 91.4879 19.1656 90.5523 18.6337C89.6277 18.1018 89.1653 17.3649 89.1653 16.4229C89.1653 16.0129 89.3249 15.6804 89.6448 15.4256C89.964 15.1707 90.5009 15.0432 91.2544 15.0432C91.2996 15.8522 91.5852 16.4672 92.1105 16.8883C92.6468 17.2984 93.3948 17.5034 94.3537 17.5034C95.0955 17.5034 95.6777 17.3815 96.1003 17.1377C96.5222 16.8828 96.7338 16.5337 96.7338 16.0905C96.7338 15.7913 96.6537 15.5474 96.4941 15.3591C96.3338 15.1707 96.0544 14.9989 95.6551 14.8438C95.2667 14.6887 94.6962 14.528 93.9427 14.3617C92.8009 14.1069 91.9051 13.8187 91.2544 13.4974C90.6037 13.176 90.1297 12.7937 89.8331 12.3504C89.5475 11.9071 89.4051 11.3531 89.4051 10.6882C89.4051 10.0565 89.5989 9.50249 89.9873 9.02596C90.3866 8.53839 90.94 8.1616 91.6482 7.89564C92.3558 7.62968 93.1777 7.4967 94.114 7.4967C95.0044 7.4967 95.803 7.61306 96.5112 7.84577C97.2188 8.06738 97.7722 8.38321 98.1722 8.79325C98.5715 9.20329 98.7715 9.67423 98.7715 10.2061C98.7715 10.6162 98.6112 10.943 98.292 11.1869C97.9838 11.4196 97.4701 11.547 96.751 11.5692C96.6934 10.8267 96.4599 10.2837 96.0489 9.94019C95.6379 9.59664 94.9927 9.4249 94.114 9.4249C93.3948 9.4249 92.8407 9.53573 92.453 9.75734C92.0646 9.97895 91.8708 10.3004 91.8708 10.7214C91.8708 11.0095 91.9448 11.2478 92.0934 11.4362C92.2414 11.6135 92.4927 11.7742 92.8468 11.9182C93.2119 12.0623 93.7311 12.2063 94.4051 12.3504C95.5804 12.6053 96.5112 12.899 97.1962 13.2314C97.892 13.5528 98.3948 13.9407 98.703 14.395C99.0222 14.8493 99.1825 15.4089 99.1825 16.0738C99.1825 16.7498 98.9825 17.3426 98.5831 17.8524C98.1948 18.3622 97.6352 18.7555 96.9051 19.0326C96.1859 19.2986 95.3352 19.4315 94.3537 19.4315Z"
                  fill="white"
                />
                <path
                  d="M5.92495 19.4315C4.89755 19.4315 3.9786 19.2376 3.1681 18.8498C2.3576 18.4619 1.72404 17.9244 1.26742 17.2374C0.822212 16.5393 0.599609 15.7469 0.599609 14.8604V12.0346C0.599609 11.1481 0.816507 10.3613 1.25029 9.67423C1.6955 8.9872 2.31194 8.45528 3.09961 8.07849C3.8987 7.69065 4.80623 7.4967 5.82221 7.4967C6.83819 7.4967 7.74571 7.64631 8.54482 7.94551C9.34392 8.23361 9.96036 8.64365 10.3941 9.17556C10.8393 9.70748 11.0619 10.3114 11.0619 10.9874C11.0619 11.4307 10.9135 11.7798 10.6167 12.0346C10.32 12.2784 9.91468 12.4003 9.40098 12.4003C9.1042 12.4003 8.8131 12.3615 8.52769 12.2839C8.56194 12.0512 8.57906 11.7686 8.57906 11.4362C8.57906 10.9043 8.32221 10.4721 7.80851 10.1397C7.29481 9.79611 6.63271 9.62436 5.82221 9.62436C5.02312 9.62436 4.37244 9.85156 3.87016 10.3059C3.36788 10.7492 3.11673 11.3254 3.11673 12.0346V14.8604C3.11673 15.5807 3.37358 16.168 3.88728 16.6224C4.4124 17.0767 5.09162 17.3039 5.92495 17.3039C6.73545 17.3039 7.39187 17.1377 7.89413 16.8052C8.40783 16.4728 8.66468 16.0406 8.66468 15.5087C8.66468 15.143 8.64755 14.877 8.61331 14.7108C8.92153 14.6443 9.20119 14.6111 9.45235 14.6111C9.96605 14.6111 10.377 14.7385 10.6852 14.9934C10.9934 15.2482 11.1476 15.5973 11.1476 16.0406C11.1476 16.6944 10.925 17.2817 10.4797 17.8026C10.046 18.3123 9.42954 18.7113 8.63043 18.9994C7.84276 19.2875 6.94091 19.4315 5.92495 19.4315ZM12.6809 8.76C12.6809 8.43866 12.8008 8.1727 13.0405 7.96213C13.2916 7.75156 13.5941 7.64631 13.948 7.64631H18.4515C19.73 7.64631 20.7117 7.96765 21.3967 8.6104C22.093 9.24205 22.4412 10.1452 22.4412 11.3198C22.4412 11.9736 22.3042 12.5222 22.0302 12.9655C21.7676 13.4087 21.3567 13.7578 20.7973 14.0127V14.0792C21.7905 14.5113 22.2871 15.3258 22.2871 16.5226V17.6696C22.2871 18.2458 22.0702 18.6835 21.6364 18.9827C21.214 19.2819 20.5919 19.4315 19.77 19.4315V16.6057C19.77 16.0517 19.6558 15.6472 19.4275 15.3923C19.2106 15.1264 18.8738 14.9934 18.4172 14.9934H15.1638V17.6696C15.1638 18.2458 14.9526 18.6835 14.5302 18.9827C14.1078 19.2819 13.4914 19.4315 12.6809 19.4315V8.76ZM18.3145 12.9156C18.8395 12.9156 19.2391 12.7771 19.5131 12.5C19.7871 12.223 19.9241 11.824 19.9241 11.3032C19.9241 10.7602 19.7928 10.3613 19.5302 10.1064C19.2791 9.85156 18.8738 9.7241 18.3145 9.7241H15.1638V12.9156H18.3145Z"
                  fill="white"
                />
                <path
                  d="M41.5874 4.9867H39.8357V5.81652C39.8357 6.73205 39.0521 7.48005 38.0839 7.48005C37.1199 7.48005 36.3322 6.73597 36.3322 5.81652V4.9867H32.8328V5.81652C32.8328 6.73205 32.0492 7.48005 31.081 7.48005C30.117 7.48005 29.3293 6.73597 29.3293 5.81652V4.9867H27.5857C27.5857 13.2965 26.7119 19.9468 26.7119 19.9468H42.4653C42.4612 19.9468 41.5874 13.2965 41.5874 4.9867ZM31.0851 6.65027C31.5692 6.65027 31.959 6.28013 31.959 5.82042V4.15688C31.959 2.77775 33.1323 1.66353 34.5845 1.66353C36.0368 1.66353 37.2101 2.77775 37.2101 4.15688V5.82042C37.2101 6.28013 37.5999 6.65027 38.0839 6.65027C38.568 6.65027 38.9577 6.28013 38.9577 5.82042V4.15688C38.9618 1.86222 37.0009 0 34.5845 0C32.1681 0 30.2072 1.86222 30.2072 4.15688V5.82042C30.2113 6.27623 30.601 6.65027 31.0851 6.65027Z"
                  fill="#C9974C"
                />
                <path
                  d="M53.4546 27.6875C53.1414 27.9916 52.7738 28.2305 52.3519 28.4043C51.9363 28.578 51.4921 28.6649 51.019 28.6649C50.5459 28.6649 50.1017 28.578 49.6861 28.4043C49.2706 28.2305 48.9094 27.9916 48.6026 27.6875C48.2893 27.3897 48.0432 27.0391 47.8642 26.6357C47.6852 26.2323 47.5957 25.801 47.5957 25.3418C47.5957 24.8825 47.6852 24.4513 47.8642 24.0479C48.0432 23.6383 48.2893 23.2815 48.6026 22.9774C48.9094 22.6795 49.2706 22.4437 49.6861 22.27C50.1017 22.09 50.5459 22 51.019 22C51.4921 22 51.9363 22.09 52.3519 22.27C52.7738 22.4437 53.1414 22.6795 53.4546 22.9774C53.7615 23.2815 54.0044 23.6383 54.1834 24.0479C54.3688 24.4513 54.4615 24.8825 54.4615 25.3418C54.4615 25.801 54.3688 26.2323 54.1834 26.6357C54.0044 27.0391 53.7615 27.3897 53.4546 27.6875ZM48.8806 27.4269C49.1491 27.7 49.4656 27.9141 49.83 28.0692C50.2007 28.2243 50.5907 28.3019 50.9998 28.3019C51.4217 28.3019 51.8181 28.2243 52.1889 28.0692C52.566 27.9141 52.8952 27.7 53.1765 27.4269C53.4514 27.1601 53.6688 26.8498 53.8286 26.496C53.9884 26.1361 54.0683 25.7514 54.0683 25.3418C54.0683 24.9322 53.9884 24.5506 53.8286 24.1968C53.6688 23.8369 53.4514 23.5204 53.1765 23.2474C52.8952 22.9805 52.5692 22.7695 52.1984 22.6144C51.8341 22.453 51.4409 22.3724 51.019 22.3724C50.6034 22.3724 50.2103 22.453 49.8395 22.6144C49.4752 22.7695 49.1555 22.9805 48.8806 23.2474C48.6058 23.5142 48.3884 23.8307 48.2286 24.1968C48.0688 24.5567 47.9889 24.9415 47.9889 25.3511C47.9889 25.7545 48.0688 26.1361 48.2286 26.496C48.3884 26.8559 48.6058 27.1663 48.8806 27.4269ZM56.9847 28.5905H55.134V28.2274H55.8819V25.4628H55.1915V25.0998H56.1984L56.208 25.4349C56.2143 25.5404 56.2207 25.6365 56.2271 25.7234C56.2335 25.8041 56.2399 25.8972 56.2463 26.0027C56.3741 25.711 56.5787 25.4752 56.86 25.2952C57.1413 25.1153 57.4609 25.0253 57.8189 25.0253C58.1705 25.0253 58.4486 25.1215 58.6532 25.3139C58.8577 25.5062 58.9664 25.7575 58.9792 26.0678V28.2274H59.6888V28.5905H57.8381V28.2274H58.586V26.1702C58.5732 25.9655 58.4965 25.7917 58.3559 25.649C58.2217 25.5 58.0203 25.4194 57.7518 25.4069C57.5536 25.4069 57.365 25.438 57.186 25.5C57.007 25.5621 56.8536 25.649 56.7258 25.7607C56.5851 25.8786 56.4732 26.0151 56.3902 26.1702C56.3134 26.3254 56.2751 26.496 56.2751 26.6822V28.2274H56.9847V28.5905ZM62.21 28.5905H60.3593V28.2274H61.0689V21.9721H60.388V21.6091H61.462V28.2274H62.21V28.5905ZM64.7289 28.5905H62.8782V28.2274H63.6166V25.4628H62.8782V25.0998H64.0097V28.2274H64.7289V28.5905ZM64.1344 23.8617C64.1344 23.9486 64.1024 24.0231 64.0385 24.0851C63.9746 24.141 63.901 24.1689 63.818 24.1689C63.7413 24.1689 63.6709 24.141 63.607 24.0851C63.5431 24.0231 63.5111 23.9486 63.5111 23.8617C63.5111 23.7748 63.5431 23.7035 63.607 23.6476C63.6709 23.5856 63.7413 23.5545 63.818 23.5545C63.901 23.5545 63.9746 23.5856 64.0385 23.6476C64.1024 23.7035 64.1344 23.7748 64.1344 23.8617ZM67.2479 28.5905H65.3972V28.2274H66.1452V25.4628H65.4547V25.0998H66.4616L66.4712 25.4349C66.4776 25.5404 66.484 25.6365 66.4904 25.7234C66.4968 25.8041 66.5032 25.8972 66.5095 26.0027C66.6374 25.711 66.842 25.4752 67.1232 25.2952C67.4045 25.1153 67.7242 25.0253 68.0821 25.0253C68.4338 25.0253 68.7121 25.1215 68.9163 25.3139C69.121 25.5062 69.23 25.7575 69.2423 26.0678V28.2274H69.9519V28.5905H68.1013V28.2274H68.8491V26.1702C68.8368 25.9655 68.7601 25.7917 68.619 25.649C68.4849 25.5 68.2835 25.4194 68.015 25.4069C67.8169 25.4069 67.6283 25.438 67.4493 25.5C67.2703 25.5621 67.1169 25.649 66.989 25.7607C66.8484 25.8786 66.7365 26.0151 66.6534 26.1702C66.5767 26.3254 66.5383 26.496 66.5383 26.6822V28.2274H67.2479V28.5905ZM72.5019 25.3976C72.2587 25.3976 72.0354 25.4473 71.8306 25.5466C71.6327 25.6458 71.4663 25.7793 71.332 25.9468C71.2039 26.1082 71.1149 26.2912 71.0635 26.496C71.0121 26.6946 71.0094 26.8994 71.0539 27.1104C71.4889 26.9428 71.9204 26.7784 72.3484 26.617C72.7834 26.4495 73.2176 26.2819 73.6526 26.1144C73.5375 25.9034 73.3779 25.7327 73.1731 25.6024C72.9752 25.4659 72.7512 25.3976 72.5019 25.3976ZM73.758 28.1716C73.5916 28.3205 73.4032 28.4384 73.1923 28.5253C72.9813 28.6122 72.7512 28.6556 72.5019 28.6556C72.2395 28.6556 71.9937 28.6091 71.7635 28.516C71.5395 28.4229 71.3416 28.2926 71.169 28.125C70.9964 27.9575 70.8621 27.7651 70.7663 27.5479C70.6704 27.3307 70.6224 27.0949 70.6224 26.8405C70.6224 26.5922 70.6704 26.3564 70.7663 26.133C70.8621 25.9096 70.9964 25.7172 71.169 25.5559C71.3416 25.3945 71.5395 25.2673 71.7635 25.1742C71.9937 25.075 72.2395 25.0253 72.5019 25.0253C72.6998 25.0253 72.8889 25.0594 73.0676 25.1277C73.2464 25.1897 73.4067 25.2828 73.5471 25.4069C73.6813 25.5186 73.7998 25.6551 73.9019 25.8165C74.0039 25.9716 74.0875 26.1423 74.1512 26.3285C73.6526 26.5208 73.1539 26.7101 72.6553 26.8963C72.1628 27.0825 71.6676 27.2748 71.169 27.4734C71.2841 27.7155 71.4601 27.9109 71.6964 28.0599C71.9327 28.2088 72.2012 28.2833 72.5019 28.2833C72.6998 28.2833 72.8854 28.2492 73.058 28.1809C73.2306 28.1126 73.3841 28.0165 73.5183 27.8923L73.758 28.1716ZM79.9258 28.2926C79.83 28.4043 79.7053 28.4942 79.5519 28.5625C79.4046 28.6308 79.2224 28.6649 79.0053 28.6649C78.8005 28.6649 78.5991 28.6401 78.4012 28.5905C78.2094 28.547 78.0402 28.457 77.893 28.3205V27.641H78.2478V28.1157C78.369 28.1902 78.4937 28.2399 78.6217 28.2647C78.7498 28.2833 78.8841 28.2926 79.0245 28.2926C79.1204 28.2926 79.2128 28.2801 79.3026 28.2553C79.3923 28.2243 79.4752 28.1809 79.5519 28.125C79.6224 28.0692 79.6765 28.004 79.7149 27.9295C79.7594 27.8489 79.782 27.7527 79.782 27.641C79.782 27.4796 79.7402 27.3555 79.6574 27.2686C79.5745 27.1817 79.4656 27.1135 79.3313 27.0639C79.2032 27.008 79.0628 26.9583 78.9094 26.9149C78.756 26.8715 78.6121 26.8187 78.4779 26.7567C78.3437 26.6946 78.232 26.6077 78.1423 26.496C78.0594 26.3782 78.0176 26.2168 78.0176 26.012C78.0176 25.8444 78.0464 25.7017 78.1039 25.5838C78.1676 25.4659 78.2512 25.3666 78.3532 25.2859C78.4553 25.2053 78.5738 25.1463 78.708 25.1091C78.8423 25.0657 78.9669 25.0439 79.082 25.0439C79.1649 25.0439 79.245 25.0501 79.3217 25.0625C79.3984 25.0687 79.4882 25.0873 79.5902 25.1184C79.6731 25.1494 79.7532 25.1867 79.83 25.2301C79.9067 25.2673 79.9772 25.3139 80.0409 25.3697V26.0492H79.6765V25.5652C79.5868 25.5155 79.4943 25.4783 79.3984 25.4535C79.3026 25.4287 79.2005 25.4163 79.0916 25.4163C79.0087 25.4163 78.9224 25.4287 78.8327 25.4535C78.7498 25.4721 78.6758 25.5032 78.6121 25.5466C78.5546 25.5962 78.5067 25.6583 78.4683 25.7327C78.43 25.8072 78.4108 25.8972 78.4108 26.0027C78.4108 26.1392 78.4553 26.2478 78.545 26.3285C78.6409 26.403 78.7526 26.465 78.8806 26.5147C79.0149 26.5705 79.1553 26.6232 79.3026 26.6729C79.456 26.7163 79.5998 26.7753 79.7341 26.8498C79.8621 26.9242 79.9676 27.0204 80.0505 27.1383C80.1402 27.2562 80.1847 27.4145 80.1847 27.6131C80.1847 27.7248 80.1621 27.8426 80.1176 27.9668C80.0793 28.0847 80.0156 28.1933 79.9258 28.2926ZM82.671 28.5905H80.8204V28.2274H81.5683V21.9721H80.8587V21.6091H81.9615V25.5838L81.9327 26.0027C82.0669 25.7048 82.271 25.469 82.5464 25.2952C82.821 25.1215 83.1409 25.0315 83.5053 25.0253C83.8567 25.0253 84.1348 25.1215 84.3395 25.3139C84.5437 25.5062 84.6526 25.7575 84.6656 26.0678V28.2274H85.3752V28.5905H83.5245V28.2274H84.2724V26.1702C84.2594 25.9655 84.1827 25.7917 84.0423 25.649C83.908 25.5 83.7067 25.4194 83.4382 25.4069C83.2395 25.4069 83.0512 25.438 82.8724 25.5C82.693 25.5621 82.5395 25.649 82.4121 25.7607C82.271 25.8786 82.1594 26.0151 82.0765 26.1702C81.9998 26.3254 81.9615 26.496 81.9615 26.6822V28.2274H82.671V28.5905ZM89.2868 28.125C89.1142 28.2926 88.9094 28.4229 88.6731 28.516C88.443 28.6091 88.1964 28.6556 87.9347 28.6556C87.6663 28.6556 87.4169 28.6091 87.1868 28.516C86.9628 28.4229 86.7676 28.2926 86.6019 28.125C86.4293 27.9637 86.295 27.7744 86.1991 27.5572C86.1032 27.3338 86.0553 27.0949 86.0553 26.8405C86.0553 26.5922 86.1032 26.3564 86.1991 26.133C86.295 25.9096 86.4293 25.7141 86.6019 25.5466C86.7676 25.3852 86.9663 25.258 87.1964 25.1649C87.4265 25.0657 87.6724 25.016 87.9347 25.016C88.1964 25.016 88.443 25.0657 88.6731 25.1649C88.9094 25.258 89.1142 25.3852 89.2868 25.5466C89.4526 25.7141 89.5841 25.9096 89.68 26.133C89.782 26.3564 89.8334 26.5922 89.8334 26.8405C89.8334 27.0949 89.782 27.3307 89.68 27.5479C89.5841 27.7651 89.4526 27.9575 89.2868 28.125ZM86.88 27.8551C87.0142 27.9916 87.1704 28.0971 87.3498 28.1716C87.5286 28.246 87.7204 28.2833 87.9252 28.2833C88.1293 28.2833 88.321 28.246 88.5005 28.1716C88.6854 28.0971 88.8457 27.9916 88.98 27.8551C89.1204 27.7309 89.2293 27.582 89.306 27.4083C89.3827 27.2345 89.421 27.0452 89.421 26.8405C89.421 26.6481 89.3827 26.465 89.306 26.2913C89.2293 26.1113 89.1204 25.953 88.98 25.8165C88.8457 25.6862 88.6854 25.5838 88.5005 25.5093C88.321 25.4349 88.1293 25.3976 87.9252 25.3976C87.7204 25.3976 87.5286 25.4349 87.3498 25.5093C87.1704 25.5838 87.0142 25.6862 86.88 25.8165C86.7457 25.953 86.6402 26.1082 86.5635 26.2819C86.4868 26.4557 86.4484 26.6418 86.4484 26.8405C86.4484 27.0452 86.4868 27.2345 86.5635 27.4083C86.6402 27.582 86.7457 27.7309 86.88 27.8551ZM90.58 30.9176V30.5545H91.2224V25.4628H90.5032V25.0998H91.5389C91.5389 25.2425 91.5416 25.3852 91.5484 25.528C91.5608 25.6645 91.5676 25.801 91.5676 25.9375C91.6758 25.6955 91.8649 25.4845 92.1334 25.3045C92.4019 25.1246 92.7279 25.0346 93.1115 25.0346C93.3669 25.0346 93.6101 25.0811 93.8402 25.1742C94.0704 25.2673 94.2717 25.3976 94.4443 25.5652C94.6169 25.7327 94.7512 25.9282 94.8471 26.1516C94.943 26.3688 94.9909 26.6016 94.9909 26.8498C94.9909 27.098 94.943 27.3338 94.8471 27.5572C94.7512 27.7806 94.6169 27.973 94.4443 28.1343C94.2717 28.2957 94.0704 28.426 93.8402 28.5253C93.6101 28.6184 93.3669 28.6649 93.1115 28.6649C92.9197 28.6649 92.7402 28.6401 92.5745 28.5905C92.408 28.547 92.2608 28.4819 92.1334 28.395C91.9991 28.3143 91.8868 28.2274 91.7978 28.1343C91.7142 28.0351 91.6505 27.9295 91.606 27.8178C91.606 27.8799 91.606 27.942 91.606 28.004C91.6121 28.0599 91.6156 28.1157 91.6156 28.1716V30.5545H92.4306V30.9176H90.58ZM93.1115 25.4069C92.8937 25.4069 92.6923 25.4442 92.5074 25.5186C92.3279 25.5931 92.1717 25.6955 92.0375 25.8258C91.9032 25.9561 91.7978 26.1113 91.721 26.2913C91.6505 26.465 91.6156 26.6512 91.6156 26.8498C91.6156 27.0545 91.6539 27.2469 91.7306 27.4269C91.8074 27.6006 91.9156 27.7558 92.0567 27.8923C92.1909 28.0165 92.3471 28.1157 92.5265 28.1902C92.7053 28.2585 92.9005 28.2926 93.1115 28.2926C93.3094 28.2926 93.4978 28.2585 93.6772 28.1902C93.856 28.1157 94.0128 28.0165 94.1471 27.8923C94.2875 27.762 94.3964 27.6069 94.4731 27.4269C94.556 27.2469 94.5978 27.0545 94.5978 26.8498C94.5978 26.6388 94.556 26.4433 94.4731 26.2633C94.3964 26.0833 94.2875 25.9282 94.1471 25.7979C94.0128 25.68 93.856 25.5869 93.6772 25.5186C93.4978 25.4442 93.3094 25.4069 93.1115 25.4069Z"
                  fill="white"
                />
                <path
                  d="M0 24.6011H44.5205V28.5904H4.10959C1.83992 28.5904 0 26.8043 0 24.6011Z"
                  fill="#C9974C"
                />
              </svg>
            </div>
            <p className="font-outfit text-[16px] font-[300]">{t("abouts")}</p>
          </div>
          <div className="footer-links max-w-full md:max-w-md">
            <p className="mb-4 md:mb-10 font-bold">Links</p>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="/" className="text-white hover:underline">
                  {t("Home")}
                </a>
              </li>
              <li>
                <a href="/products" className="text-white hover:underline">
                  {t("Products")}
                </a>
              </li>
              <li>
                <a href="#AboutCrafters" className="text-white hover:underline">
                  {t("About Us")}
                </a>
              </li>
              <li>
                <a
                  href="#ContactSection"
                  className="text-white hover:underline"
                >
                  {t("Contact Us")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <p className="mb-4 md:mb-10 font-bold">Contact</p>
            <p>Tel: 07******10</p>
            <p>
              Email:{" "}
              <a
                href="mailto:team.crafters@gmail.com"
                className="text-white hover:underline"
              >
                team.crafters@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-center py-4 md:py-8">
        <p>&copy; 2024 Upscale Crafters, all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
