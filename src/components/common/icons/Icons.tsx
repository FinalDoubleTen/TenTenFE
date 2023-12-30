interface IconProps {
  size?: number;
  color?: string;
  fill?: string;
}

export const HomeIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      color={color}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Home">
        <path
          id="Rectangle 74"
          d="M1.69238 10.6334C1.69238 9.35824 2.27632 8.15325 3.2772 7.36309L9.00636 2.84006C10.5202 1.64497 12.6563 1.64497 14.1701 2.84006L19.8992 7.36309C20.9001 8.15325 21.484 9.35824 21.484 10.6334V17.4684C21.484 19.7696 19.6186 21.6351 17.3174 21.6351H15.7549C15.1796 21.6351 14.7132 21.1687 14.7132 20.5934V17.4684C14.7132 16.3178 13.7805 15.3851 12.6299 15.3851H10.5465C9.39596 15.3851 8.46322 16.3178 8.46322 17.4684V20.5934C8.46322 21.1687 7.99685 21.6351 7.42155 21.6351H5.85905C3.55786 21.6351 1.69238 19.7696 1.69238 17.4684L1.69238 10.6334Z"
          stroke={color}
          stroke-width="1.5625"
        />
      </g>
    </svg>
  );
};

export const CalendarIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 22"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Calendar">
        <rect
          id="Rectangle 2"
          x="1.5614"
          y="2.87842"
          width="18"
          height="18"
          rx="5"
          stroke={color}
          stroke-width="1.5"
        />
        <path
          id="Line"
          d="M1.5614 7.87842H19.5614"
          stroke={color}
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Line_2"
          d="M15.0614 1.37842L15.0614 4.37842"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Line_3"
          d="M6.0614 1.37842L6.0614 4.37842"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g id="Group 220">
          <g id="Group 218">
            <path
              id="Line_4"
              d="M5.0614 11.8784H6.0614"
              stroke={color}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Line_5"
              d="M10.0614 11.8784H11.0614"
              stroke={color}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Line_6"
              d="M15.0614 11.8784H16.0614"
              stroke={color}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g id="Group 219">
            <path
              id="Line_7"
              d="M5.0614 15.8784H6.0614"
              stroke={color}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Line_8"
              d="M10.0614 15.8784H11.0614"
              stroke={color}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Line_9"
              d="M15.0614 15.8784H16.0614"
              stroke={color}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const HeartIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="&#236;&#176;&#156;">
        <path
          id="Heart"
          d="M4.07828 13.1744L10.2393 19.6674C11.4223 20.9142 13.4088 20.9142 14.5918 19.6674L20.7528 13.1744C22.9698 10.8379 22.9698 7.04976 20.7528 4.71329C18.5358 2.37682 14.9413 2.37682 12.7243 4.71329C12.5565 4.89019 12.2746 4.89019 12.1067 4.71329C9.88974 2.37682 6.29528 2.37682 4.07828 4.71329C1.86128 7.04976 1.86128 10.8379 4.07828 13.1744Z"
          stroke={color}
          stroke-width="1.5"
        />
      </g>
    </svg>
  );
};

export const UserIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="User">
        <circle
          id="Ellipse 33"
          cx="4"
          cy="4"
          r="4"
          transform="matrix(-1 0 0 1 12.0197 1.37842)"
          stroke={color}
          stroke-width="1.5"
        />
        <path
          id="Rectangle 2"
          d="M1.01965 15.3131C1.01965 14.4527 1.56051 13.6853 2.37074 13.3959V13.3959C6.02369 12.0913 10.0156 12.0913 13.6686 13.3959V13.3959C14.4788 13.6853 15.0197 14.4527 15.0197 15.3131V16.6286C15.0197 17.816 13.9679 18.7282 12.7924 18.5602L11.838 18.4239C9.3053 18.0621 6.734 18.0621 4.20128 18.4239L3.24686 18.5602C2.07136 18.7282 1.01965 17.816 1.01965 16.6286V15.3131Z"
          stroke={color}
          stroke-width="1.5"
        />
      </g>
    </svg>
  );
};

export const CheckIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36659">
        <path
          id="Vector 734"
          d="M3.12079 5.40039L8.41553 10.6951L13.7103 5.40039"
          stroke={color}
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export const LeftIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 10"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Left">
        <path
          id="Vector"
          d="M4.74112 1.18604L1.44823 4.47893C1.0577 4.86945 1.0577 5.50262 1.44823 5.89314L4.74112 9.18604M1.74112 5.18604L15.7411 5.18604"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export const MapIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36689">
        <g id="Group">
          <path
            id="Exclude"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.63905 13.4649C8.02061 14.0124 8.81045 14.0124 9.192 13.4649C10.4794 11.6176 12.9155 7.87993 12.9155 6.04785C12.9155 4.85438 12.4414 3.70978 11.5975 2.86587C10.7536 2.02196 9.609 1.54785 8.41553 1.54785C7.22205 1.54785 6.07746 2.02196 5.23355 2.86587C4.38963 3.70978 3.91553 4.85438 3.91553 6.04785C3.91553 7.87993 6.35168 11.6176 7.63905 13.4649ZM9.91553 6.04785C9.91553 6.87628 9.24395 7.54785 8.41553 7.54785C7.5871 7.54785 6.91553 6.87628 6.91553 6.04785C6.91553 5.21942 7.5871 4.54785 8.41553 4.54785C9.24395 4.54785 9.91553 5.21942 9.91553 6.04785Z"
            stroke={color}
          />
        </g>
      </g>
    </svg>
  );
};

export const PenIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36684">
        <g id="Group 36683">
          <path
            id="Rectangle 74"
            d="M12.9793 3.21944C13.6297 2.56808 14.6846 2.56768 15.3354 3.21855L17.412 5.29509C18.0573 5.94042 18.064 6.98512 17.427 7.63868L9.73273 15.5331C9.26238 16.0156 8.61727 16.2878 7.94365 16.2877L5.65019 16.2876C4.9395 16.2876 4.37194 15.6952 4.40183 14.9846L4.50029 12.6437C4.52662 12.0177 4.78681 11.4244 5.22936 10.9811L12.9793 3.21944Z"
            stroke={color}
            stroke-width="1.25"
          />
          <path
            id="Line"
            d="M11.2227 5.12033L15.3475 9.24512"
            stroke={color}
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line_2"
            d="M13.2701 16.2266H18.3715"
            stroke={color}
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const PhoneIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36690">
        <path
          id="Vector"
          d="M10.4971 14.3215C11.1129 14.7188 11.8468 14.8919 12.5752 14.8118C13.3037 14.7316 13.9823 14.4031 14.4971 13.8815L14.9471 13.4415C15.1444 13.2397 15.2548 12.9687 15.2548 12.6865C15.2548 12.4043 15.1444 12.1333 14.9471 11.9315L13.0371 10.0415C12.837 9.84482 12.5676 9.73463 12.2871 9.73463C12.0065 9.73463 11.7372 9.84482 11.5371 10.0415C11.3353 10.2388 11.0643 10.3492 10.7821 10.3492C10.4999 10.3492 10.2289 10.2388 10.0271 10.0415L7.02709 7.04148C6.92701 6.94285 6.84754 6.82532 6.79329 6.6957C6.73905 6.56609 6.71112 6.42698 6.71112 6.28648C6.71112 6.14597 6.73905 6.00687 6.79329 5.87725C6.84754 5.74764 6.92701 5.6301 7.02709 5.53148C7.22374 5.33137 7.33394 5.06204 7.33394 4.78148C7.33394 4.50092 7.22374 4.23158 7.02709 4.03148L5.12709 2.13148C4.9253 1.93419 4.6543 1.82373 4.37209 1.82373C4.08988 1.82373 3.81888 1.93419 3.61709 2.13148L3.17709 2.58148C2.65544 3.09622 2.32692 3.77488 2.24679 4.50334C2.16666 5.23181 2.3398 5.96565 2.73709 6.58148C4.80713 9.63221 7.44103 12.2593 10.4971 14.3215Z"
          stroke={color}
        />
      </g>
    </svg>
  );
};

export const ReactIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="iconify iconify--logos"
      width={size}
      height={size}
      fill={fill}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 228">
      <path
        stroke={color}
        d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path>
    </svg>
  );
};

export const StarIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Star 5"
        d="M7.46447 0.974901C7.76382 0.0535908 9.06723 0.0535913 9.36658 0.974902L10.4362 4.2667C10.57 4.67872 10.954 4.95768 11.3872 4.95768H14.8484C15.8171 4.95768 16.2199 6.1973 15.4362 6.7667L12.636 8.80114C12.2855 9.05578 12.1389 9.50715 12.2728 9.91917L13.3423 13.211C13.6417 14.1323 12.5872 14.8984 11.8035 14.329L9.00331 12.2946C8.65283 12.0399 8.17823 12.0399 7.82774 12.2946L5.02757 14.329C4.24386 14.8984 3.18938 14.1323 3.48873 13.211L4.5583 9.91917C4.69217 9.50715 4.54552 9.05578 4.19503 8.80114L1.39486 6.7667C0.611146 6.1973 1.01392 4.95768 1.98265 4.95768H5.44385C5.87707 4.95768 6.26103 4.67872 6.3949 4.2667L7.46447 0.974901Z"
        stroke={color}
      />
    </svg>
  );
};

export const PlusIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 59 59"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36665">
        <g id="Ellipse 532" filter="url(#filter0_d_447_674)">
          <circle cx="27.4161" cy="28.5547" r="23" fill="#28D8FF" />
        </g>
        <g id="Group 36654">
          <path
            id="Vector 728"
            d="M18.7384 28.5547H36.0937"
            stroke={color}
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            id="Vector 729"
            d="M27.416 19.877L27.416 37.2323"
            stroke={color}
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_447_674"
          x="0.616138"
          y="0.754687"
          width="57.6"
          height="57.6"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="1" />
          <feGaussianBlur stdDeviation="2.9" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_447_674"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_447_674"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const ChatIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="mail-chat-bubble-typing-oval--messages-message-bubble-typing-chat"
        clip-path="url(#clip0_447_1104)">
        <g id="Group">
          <path
            id="Vector"
            d="M10.9155 7.5918C10.6394 7.5918 10.4155 7.36794 10.4155 7.0918C10.4155 6.81565 10.6394 6.5918 10.9155 6.5918C11.1917 6.5918 11.4155 6.81565 11.4155 7.0918C11.4155 7.36794 11.1917 7.5918 10.9155 7.5918Z"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M7.66553 7.5918C7.38938 7.5918 7.16553 7.36794 7.16553 7.0918C7.16553 6.81565 7.38938 6.5918 7.66553 6.5918C7.94167 6.5918 8.16553 6.81565 8.16553 7.0918C8.16553 7.36794 7.94167 7.5918 7.66553 7.5918Z"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M4.41553 7.5918C4.13938 7.5918 3.91553 7.36794 3.91553 7.0918C3.91553 6.81565 4.13938 6.5918 4.41553 6.5918C4.69167 6.5918 4.91553 6.81565 4.91553 7.0918C4.91553 7.36794 4.69167 7.5918 4.41553 7.5918Z"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_4"
            d="M7.41553 0.591798C8.59129 0.592164 9.74493 0.911437 10.7536 1.51561C11.7622 2.11979 12.5881 2.98623 13.1433 4.02267C13.6985 5.05911 13.9621 6.22673 13.9061 7.40115C13.8502 8.57558 13.4767 9.71284 12.8255 10.6918L13.9155 13.5918L10.2655 12.9318C9.38662 13.3613 8.4221 13.5869 7.44388 13.5917C6.46566 13.5966 5.49895 13.3805 4.61584 12.9598C3.73272 12.539 2.95596 11.9243 2.34347 11.1616C1.73097 10.3988 1.29854 9.50765 1.07841 8.55451C0.858272 7.60136 0.856112 6.61082 1.07209 5.65673C1.28806 4.70263 1.7166 3.80958 2.32576 3.04416C2.93492 2.27874 3.70899 1.66069 4.59027 1.23607C5.47154 0.811449 6.43729 0.591221 7.41553 0.591798V0.591798Z"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_447_1104">
          <rect
            width="14"
            height="14"
            fill={color}
            transform="matrix(-1 0 0 1 14.4155 0.0917969)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36673">
        <circle id="Ellipse" cx="8.00671" cy="8.59326" r="8" fill="#888888" />
        <path
          id="Line"
          d="M5.04033 5.62725L10.9731 11.5601"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Line_2"
          d="M10.9731 5.62725L5.04028 11.5601"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const DeleteIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36693">
        <g id="Trash can">
          <path
            id="Rectangle 74"
            d="M3.77651 5.58206C3.21324 4.83103 3.74912 3.75928 4.68791 3.75928H12.1309C13.0697 3.75928 13.6056 4.83103 13.0423 5.58206V5.58206C12.6315 6.12984 12.4094 6.79608 12.4094 7.4808V11.7593C12.4094 13.232 11.2155 14.4259 9.74276 14.4259H7.07609C5.60333 14.4259 4.40942 13.232 4.40942 11.7593V7.4808C4.40942 6.79608 4.18734 6.12984 3.77651 5.58206V5.58206Z"
            stroke={color}
          />
          <path
            id="Line"
            d="M9.74268 11.0928L9.74268 7.09277"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line_2"
            d="M7.07617 11.0928L7.07617 7.09277"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Rectangle 4"
            d="M11.076 3.75928L10.7132 2.67097C10.5318 2.12652 10.0222 1.75928 9.44833 1.75928H7.37035C6.79645 1.75928 6.28693 2.12652 6.10544 2.67097L5.74268 3.75928"
            stroke={color}
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const MoreIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36692">
        <g id="Group 36691">
          <circle
            id="Ellipse 533"
            cx="12.4155"
            cy="5.81689"
            r="1.69482"
            stroke={color}
          />
          <circle
            id="Ellipse 534"
            cx="12.4155"
            cy="12.1226"
            r="1.69482"
            stroke={color}
          />
          <circle
            id="Ellipse 535"
            cx="12.4155"
            cy="18.4272"
            r="1.69482"
            stroke={color}
          />
        </g>
      </g>
    </svg>
  );
};

export const DownIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36659">
        <path
          id="Vector 734"
          d="M3.12079 5.40039L8.41553 10.6951L13.7103 5.40039"
          stroke={color}
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Search">
        <ellipse
          id="Ellipse"
          cx="6.74886"
          cy="6.60726"
          rx="5.33333"
          ry="5.33333"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Line"
          d="M10.4155 10.5793L13.7489 13.9127"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const CameraIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 11"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Vector"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.14101 1.46934C3.49974 0.877766 4.14214 0.460938 4.87796 0.460938H7.5831C8.31891 0.460938 8.96132 0.877766 9.32005 1.46934C9.42939 1.64966 9.55178 1.839 9.67791 2.01208C9.73825 2.0949 9.85609 2.16106 10.0196 2.16106H10.0871C11.3044 2.16106 12.2911 3.14781 12.2911 4.36491V8.7254C12.2911 9.94256 11.3044 10.9293 10.0873 10.9293H2.37378C1.15662 10.9293 0.169922 9.94256 0.169922 8.7254V4.36491C0.169922 3.14781 1.15643 2.16106 2.37365 2.16106H2.44121C2.6047 2.16106 2.7228 2.0949 2.78315 2.01208C2.90928 1.839 3.03167 1.64966 3.14101 1.46934ZM4.87796 1.56287C4.57032 1.56287 4.26555 1.74005 4.08324 2.0407C3.9634 2.23833 3.82358 2.45537 3.67372 2.66103C3.37133 3.076 2.89391 3.26298 2.44147 3.26298H2.37391C1.76539 3.26298 1.27185 3.75628 1.27185 4.36491V8.7254C1.27185 9.33398 1.7652 9.82733 2.37378 9.82733H10.0873C10.6959 9.82733 11.1892 9.33398 11.1892 8.7254V4.36491C11.1892 3.75628 10.6959 3.26298 10.0874 3.26298H10.0199C9.56741 3.26298 9.08973 3.076 8.78734 2.66103C8.63747 2.45537 8.49766 2.23833 8.37782 2.0407C8.19551 1.74005 7.89073 1.56287 7.5831 1.56287H4.87796ZM6.23053 4.31769C5.31766 4.31769 4.57764 5.05771 4.57764 5.97058C4.57764 6.88345 5.31766 7.62347 6.23053 7.62347C7.1434 7.62347 7.88342 6.88345 7.88342 5.97058C7.88342 5.05771 7.1434 4.31769 6.23053 4.31769ZM3.47571 5.97058C3.47571 4.44913 4.70908 3.21576 6.23053 3.21576C7.75197 3.21576 8.98535 4.44913 8.98535 5.97058C8.98535 7.49203 7.75197 8.7254 6.23053 8.7254C4.70908 8.7254 3.47571 7.49202 3.47571 5.97058Z"
        stroke={color}
      />
    </svg>
  );
};