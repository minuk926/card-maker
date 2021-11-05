import React, {memo, useRef, useState} from 'react';
import styles from './card_add_form.module.scss';
import Button from '../button/button';

const CardAddForm = memo(({addCard, FileInput}) => {
  const formRef = useRef();
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [file, setFile] = useState({fileName: null, fileURL: null});

  const onSubmit = (e) => {
    e.preventDefault();

    if (!nameRef.current.value || !companyRef.current.value || !emailRef.current.value) return;
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName,
      fileURL: file.fileURL
    };
    formRef.current.reset();
    setFile({fileName: null, fileURL: null});
    addCard(card);
  };

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url
    });
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" />
      <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company" />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="message" />
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={file.fileName} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
