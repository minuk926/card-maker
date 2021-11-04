import React, {useRef} from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardEditForm = ({card, updateCard, removeCard, FileInput}) => {
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const onChange = (e) => {
    console.log(e);
    if (e.currentTarget === null) return;
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };
  const {name, company, title, email, message, theme, fileName} = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    removeCard(card);
  };
  return (
    <form className={styles.form}>
      <input ref={nameRef} onChange={onChange} className={styles.input} type="text" name="name" defaultValue={name} />
      <input
        ref={companyRef}
        onChange={onChange}
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
      />
      <select ref={themeRef} onChange={onChange} className={styles.select} name="theme" defaultValue={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        onChange={onChange}
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
      />
      <input
        ref={emailRef}
        onChange={onChange}
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
      />
      <textarea
        ref={messageRef}
        onChange={onChange}
        className={styles.textarea}
        name="message"
        defaultValue={message}
      />
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={fileName} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
