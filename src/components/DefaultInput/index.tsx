import styles from './styles.module.css';

type DefaultinputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, labelText, type,...rest }: DefaultinputProps) {
  return (
    <>
      {labelText && <label htmlFor='meuInput'>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest}/>
    </>
  );
}
