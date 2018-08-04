import styled from "styled-components";

const DescriptionText = styled.div.attrs({
    className: "subtitle is-2"
})`
    &&& {
        font-family: Gilroy;
        font-size: 24px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0.3px;
        color: ${props => props.color};
    }
`;

export default DescriptionText;