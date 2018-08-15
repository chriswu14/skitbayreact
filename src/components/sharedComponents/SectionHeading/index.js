import styled from "styled-components";

const SectionHeadingText = styled.h1.attrs({
    className: "title is-1"
})`
    &&& {
        margin-bottom: 2.5rem;
        font-size: 4rem;
        color: ${props => props.color};
    }

    @media (min-width: 769px) {
        &&& {
            font-size: 5rem;
        }
    }
`;

export default SectionHeadingText;
