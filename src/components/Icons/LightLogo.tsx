interface LogoProps {
    className?: string
    style?: any
}

export default function Logo(props:LogoProps) {
    return (
        <svg className={props.className} style={props.style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.2679 1.09892C17.4334 0.689265 17.2355 0.223 16.8259 0.0574883C16.4162 -0.108023 15.95 0.0898945 15.7844 0.49955L11.9826 9.90944L8.01702 0.567129C7.84439 0.160424 7.37474 -0.029326 6.96803 0.14331C6.56133 0.315946 6.37158 0.785594 6.54422 1.1923L10.5098 10.5346L1.0999 6.73274C0.690241 6.56723 0.223977 6.76514 0.0584649 7.1748C-0.107047 7.58446 0.0908704 8.05072 0.500526 8.21623L9.91017 12.018L0.568333 15.9834C0.161629 16.156 -0.0281208 16.6256 0.144515 17.0323C0.317151 17.439 0.786798 17.6288 1.1935 17.4562L10.5357 13.4906L6.73372 22.9009C6.56821 23.3105 6.76612 23.7768 7.17578 23.9423C7.58544 24.1078 8.0517 23.9099 8.21721 23.5002L12.0191 14.0903L15.9845 23.4323C16.1572 23.839 16.6268 24.0287 17.0335 23.8561C17.4402 23.6834 17.63 23.2138 17.4573 22.8071L13.4919 13.4651L22.9019 17.267C23.3115 17.4325 23.7778 17.2345 23.9433 16.8249C24.1088 16.4152 23.9109 15.949 23.5012 15.7835L14.091 11.9815L23.4335 8.01586C23.8402 7.84322 24.0299 7.37357 23.8573 6.96687C23.6846 6.56017 23.215 6.37042 22.8083 6.54305L13.4662 10.5085L17.2679 1.09892Z" fill="white"/>
        </svg>
    )
}

Logo.defaultProps = {
    className: ''
}