import styled from "styled-components";

const SectionHeadingText = styled.h1.attrs({
    className: "title is-1"
})`
    &&& {
        margin-bottom: 2.5rem;
        font-size: 5rem;
        color: ${props => props.color};       
    }
`;

export default SectionHeadingText;
