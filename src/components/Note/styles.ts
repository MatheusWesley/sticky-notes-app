import styled from "styled-components";

export const NoteContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 15rem);
  padding: 24px;
  gap: 24px;
`


export const NoteContent = styled.textarea`
  height: 13.5rem;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  resize: none;
  outline: none;
  font-family: sans-serif;
  font-size: 1.2rem;

  &:focus {
    outline: 3px solid ${props => props.theme["green-500"]};
  }
`

export const AddNote = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13.5rem;

  border: none;
  border-radius: 8px;
  outline: none;

  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-900"]};
  
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme["green-700"]};
  }

  &:focus {
    outline: 3px solid ${props => props.theme["green-300"]};
  }
`
