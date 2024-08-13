import styled from "styled-components";

export const MessagesContainer = styled('div')`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding: 0.75rem;    
  height: 100%;
  gap: 1rem;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const MessageContainer = styled('div')`
  display: flex;
`;

export const MyMessage = styled("div")`
  display: flex;
  background: #2e186a;
  border-radius: 10px;    
  padding: 10px;
  justify-self: flex-end;
  align-self: flex-end;
  align-items: center;
`;

export const TheirMessage = styled('div')`
  display: flex;
  background: #fe7624;
  border-radius: 10px;    
  padding: 10px;
  align-items: center;
`;