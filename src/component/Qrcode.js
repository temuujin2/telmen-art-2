import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useRef } from "react";
import download from '../images/download.png'

export default function SimplePortal() {
    const [show, setShow] = useState(false);
    const container = useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className="qpay-main">
            <button type="button" onClick={handleClick}>
                {show ? "QPay code here" : "QPay"}
            </button>
            <Box display="flex" flexDirection="column">

                {show ? (
                    <Box display="flex" flexDirection="column" gap={2} className="qpay-wrapp">
                        <span>Та банкны аппликейшнаар доорх QR кодыг уншуулан намайг дэмжээрэй</span>
                        <img src={download} alt="pic" />
                        <span>Хэрэв та гар утаснаасаа орж байгаа бол
                            <a href="https://qpay.mn/q/?q=0002010102121531279404962794049600221110102332727440014A00000084300010108CAXBMNUB02105002704285520482115303496540469005802MN5911ERKHEMBAYaR6011Ulaanbaatar62510108688834510510Kinoturees0721-uaA66bvhNiFlyDOqxUwJ781511477020650956179022280020163047C1E">
                                ЭНД ДАРЖ </a>
                            банкны апп-аа сонгон намайг дэмжих боломжтой</span>
                    </Box>
                ) : null}
            </Box>
            <Box ref={container} />
        </div>
    );
}