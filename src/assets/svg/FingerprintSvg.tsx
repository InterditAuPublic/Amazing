import * as React from "react"
import Svg, { Path, Circle, G } from "react-native-svg"

type Props = {
    width?: number
    height?: number
    color?: string
}

const FingerprintSvg = ({height = 100, width = 100, color = '#6C63FF'} : Props) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 731.67004 625.99672"
        >
            <Path
                d="M376.763 311.697c2.62 10.5-.885 20.353-7.828 22.007-6.944 1.653-14.695-5.518-17.315-16.023a26.121 26.121 0 01-.145-12.784l-10.519-44.63 21.865-4.46 8.048 44.471a26.492 26.492 0 015.894 11.419z"
                fill="#fdadb0"
            />
            <Path
                fill="#fdadb0"
                d="M285.09476 566.89746L286.44183 596.14917 285.0928 604.24353 289.81448 613.68689 326.91345 617.73407 328.93704 600.19635 309.37576 590.07843 308.80716 573.55005 285.09476 566.89746z"
            />
            <Path
                d="M324.215 610.989l-2.023 2.698-38.852-11.196s1.753 17.267 1.753 20.64 64.08 3.372 73.722 2.023 6.546-10.118 6.546-10.118l-39.987-18.929-1.159 14.882z"
                fill="#2f2e43"
            />
            <Path
                fill="#fdadb0"
                d="M188.43921 545.36505L180.3541 573.50946 176.48561 580.7464 177.93686 591.20416 211.78952 606.91113 219.31921 590.94342 204.0247 575.09747 213.6188 550.21924 188.43921 545.36505z"
            />
            <Path
                d="M211.392 599.657l-2.78 1.909-33.226-23.041s-3.865 16.92-4.945 20.115 59.63 23.702 69.198 25.51 9.44-7.49 9.44-7.49l-31.827-30.73-5.86 13.727z"
                fill="#2f2e43"
            />
            <Path
                fill="#fdadb0"
                d="M287.70996 83.9671L289.12659 106.97251 246.16866 109.15169 259.47134 78.84175 287.70996 83.9671z"
            />
            <Path
                d="M290.223 103.531c-11.515 5.136-29.932 3.731-50.803 0l-3.262 144.597s65.288 13.126 87.736-11.093L312.079 118.89l-21.856-15.359z"
                fill="#e0e1e2"
            />
            <Path
                fill="#2f2e43"
                d="M316.80505 240.57915L224.63489 249.689 179.1496 558.53558 214.00221 558.53558 273.68228 346.90921 278.40808 586.74255 310.3071 586.74255 337.48035 293.15347 316.80505 240.57915z"
            />
            <Path
                d="M252.524 94.67l-30.968 18.327c-11.732 6.942-17.261 20.956-13.43 34.039l23.933 81.746s-38.974 66.958-26.31 72.865c28.46 13.274 70.927 10.042 70.927 10.042l-9.492-160.309-14.66-56.71zM288.877 102.924l35.017 13.603 8.27 101.014 23.16 81.376c-39.228 14.319-35.565 7.646-35.565 7.646l-6.498-140.415-24.384-63.224z"
                fill="#3f3d58"
            />
            <Path
                d="M340.03 297.196l-.12-.553-35.793-165.55c-1-4.626.279-9.263 3.508-12.723 3.23-3.46 7.77-5.053 12.453-4.372a14.17 14.17 0 0111.783 10.721l39.316 161.606-31.146 10.871z"
                fill="#3f3d58"
            />
            <Circle cx={269.06998} cy={55.22682} r={34.85209} fill="#fdadb0" />
            <Path
                d="M285.651 10.073c7.677 2.698 12.07 4.242 16.093 8.119 6.797 6.548 7.919 15.298 8.96 23.428.816 6.36 1.87 14.585-1.854 23.98-1.271 3.207-7.437 17.493-19.238 19.298-2.318.355-7.76.448-6.191-.71 14.515-10.717 20.71-17.186 20.202-33.702-.315-10.262-15.996-21.342-25.307-23.334-3.923-.839-9.145-.072-12.89 3.002-7.825 6.424-7.49 32.99-15.743 38.544-3.393 2.284-1.132-13.793-3.523-11.186-4.718 5.145-1.692 13.023-.844 16.023 4.021 14.23 11.604 15.623 15.532 27.776 4.24 13.12-1.097 25.473-2.363 28.402-2.201 5.095-5.98 13.84-14.613 18.036-10.958 5.325-19.596-1.61-24.69 4.336-2.848 3.323-1.308 6.843-6.451 17.18-1.68 3.374-2.52 5.062-3.262 5.002-3.518-.283-9.212-28.438-.002-54.658 3.865-11.004 7.652-21.784 17.803-30.215 5.366-4.456 9.867-6.06 11.148-11.265 1.83-7.436-5.77-10.61-7.293-22.341-1.042-8.024-1.773-19.5 1.06-26.855 2.675-6.945 4.998-12.975 11.076-18.442 1.46-1.313 13.245-10.238 25.741-10.49 5.753-.115 9.98 7.728 16.65 10.072z"
                fill="#2f2e43"
            />
            <Circle cx={359.29443} cy={229.27966} r={85.24289} fill={color} />
            <G fill="#fff">
                <Path d="M337.725 284.894l15.524-56c1.102-3.973 1.954-8.387 4.476-11.76 1.95-2.607 5.016-4.313 8.261-3.24 7.737 2.556 7.612 13.72 7.475 20.234-.208 9.833-2.427 19.644-6.513 28.594-.56 1.227-.35 2.69.897 3.42 1.074.629 2.857.338 3.42-.896 4.091-8.962 6.523-18.555 7.089-28.398.488-8.493.524-19.694-6.837-25.482-3.598-2.83-8.19-3.67-12.408-1.714-4.169 1.932-6.714 5.933-8.315 10.076-1.78 4.606-2.84 9.546-4.157 14.299l-4.246 15.316-9.487 34.222c-.861 3.105 3.961 4.43 4.821 1.329z" />
                <Path d="M359.896 258.897a144.067 144.067 0 004.851-36.885c.004-3.218-4.996-3.223-5 0a138.564 138.564 0 01-4.673 35.556c-.829 3.112 3.993 4.44 4.822 1.329z" />
                <Path d="M308.494 258.752c3.35-16.156 6.978-32.365 11.629-48.204 3.771-12.843 10.274-27.397 23.998-32.054 6.816-2.313 14.203-1.94 21.18-.598 6.917 1.33 13.924 3.311 20.3 6.34 6.036 2.868 11.62 6.82 15.593 12.265 3.922 5.374 6.364 11.612 7.68 18.107 3.056 15.073-.54 30.47-4.57 44.999a933.015 933.015 0 01-1.632 5.793c-.882 3.1 3.941 4.424 4.821 1.33 4.453-15.663 9.077-32.025 7.003-48.464-.897-7.109-2.891-14.093-6.445-20.35-3.642-6.411-8.896-11.652-15.195-15.462-6.353-3.842-13.504-6.287-20.665-8.123-7.607-1.95-15.522-3.15-23.356-2.06-7.388 1.027-14.043 4.53-19.274 9.818-5.36 5.418-8.983 12.187-11.658 19.262-2.949 7.803-4.875 16-6.903 24.077a783.584 783.584 0 00-7.328 31.995c-.274 1.321.386 2.702 1.746 3.076 1.24.34 2.8-.418 3.076-1.747z" />
                <Path d="M334.263 207.066c3.9-11.83 16.455-19.156 28.612-18.344 13.474.9 25.154 10.74 29.884 23.124 2.811 7.358 3.637 15.457 2.455 23.243-.203 1.333.336 2.688 1.746 3.075 1.182.325 2.871-.403 3.075-1.746 2.362-15.562-1.979-32.52-14.226-43.043-5.743-4.935-12.777-8.35-20.307-9.373-7.241-.984-14.541.357-20.952 3.882-7.032 3.867-12.587 10.205-15.108 17.853-1.01 3.063 3.817 4.376 4.821 1.33zM323.625 229.998c-1.074 12.826-4.307 25.509-9.537 37.272-.548 1.233-.358 2.686.897 3.42 1.065.624 2.87.344 3.42-.896a123.051 123.051 0 0010.22-39.796c.112-1.348-1.23-2.5-2.5-2.5-1.447 0-2.387 1.148-2.5 2.5zM384.02 244.315c-1.073 12.826-4.306 25.509-9.536 37.273-.548 1.232-.358 2.686.897 3.42 1.065.623 2.869.343 3.42-.897a123.051 123.051 0 0010.22-39.796c.112-1.347-1.23-2.5-2.5-2.5-1.447 0-2.387 1.149-2.5 2.5z" />
                <Path d="M336.205 234.364a117.272 117.272 0 0115.77-35.814c1.773-2.696-2.555-5.204-4.318-2.524a121.52 121.52 0 00-16.273 37.009c-.787 3.121 4.033 4.452 4.821 1.33z" />
            </G>
            <Path
                d="M0 624.383c0 .66.53 1.19 1.19 1.19h729.29c.66 0 1.19-.53 1.19-1.19 0-.66-.53-1.19-1.19-1.19H1.19c-.66 0-1.19.53-1.19 1.19z"
                fill="#3f3d58"
            />
            <Path
                d="M287.343 211.895c10.763-1.132 20.032 3.711 20.702 10.818.67 7.106-7.51 13.783-18.278 14.914a26.121 26.121 0 01-12.68-1.637l-45.66 4.2-1.37-22.272 45.158-1.776a26.491 26.491 0 0112.128-4.247z"
                fill="#fdadb0"
            />
            <Path
                d="M231.713 114.053c-11.053-1.556-21.422 5.71-23.72 16.634-8.015 38.107-22.397 119.28.192 120.636 29.537 1.772 57.891-5.316 57.891-5.316l-7.088-40.76-23.039-2.363 13.552-63.386c2.573-12.036-5.601-23.728-17.788-25.445z"
                fill="#3f3d58"
            />
        </Svg>
    )
}

export default FingerprintSvg