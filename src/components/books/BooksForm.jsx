import Button from "../Button";
import { useForm } from "react-hook-form";
import "../../error.css";
import Fieldset from "../Fieldset";

const BookForm = ({ onSubmit, authors }) => {

  console.log(authors)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Fieldset>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><label htmlFor="name">Título:</label>
        <input
          type="text"
          placeholder="Título do Livro"
          id="title"
          className={errors?.title && "input-error"}
          {...register("title", { required: true })}
        />{" "}
        {errors?.title?.type === "required" && (
          <p className="error-message">Título é obrigatório</p>
        )}</div>
        <div><label htmlFor="name">Id:</label>
        <input
          className={errors?.id && "input-error"}
          min={1}
          type="number"
          placeholder="Id do Livro"
          name="id"
          {...register("id", { required: true })}
        />
        {errors?.id?.type === "required" && (
          <p className="error-message">Id é obrigatório</p>
        )}</div>
        <div><label htmlFor="name">Selecione o Autor:</label>
        <select
          className={errors?.selected && "input-error"}
          name="selected"          defaultValue="0"
          {...register("selected", { required: true },{ validate: (value) => value !== "0" })}
        >
          <option value="0" disabled>
            Selecione um autor
          </option>
          {authors &&
            authors.map((author) => (
              <option key={author.id} value={author.id}>
                {`${author.id} - ${author.name}`}
              </option>
            ))}
        </select>
        {errors?.selected?.type === "required" && (
          <p className="error-message"> Autor é obrigatório</p>
        )}</div>
        <div><label htmlFor="name">Páginas:</label>
        <input
          min={1}
          type="number"
          placeholder="Quantidade de páginas"
          name="pages"
          {...register("pages")}
        /></div>
        
        <Button>Criar Livro</Button>
      </form>
    </Fieldset>
  );
};

export default BookForm;
