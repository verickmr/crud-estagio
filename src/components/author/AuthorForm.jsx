import Button from "../Button";
import { useForm } from "react-hook-form";
import "../../error.css";
import Fieldset from "../Fieldset";

const AuthorForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Fieldset><form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        placeholder="Nome do Autor"
        id="name"
        className={errors?.name && "input-error"}
        {...register("name", { required: true })}
      />{" "}
      {errors?.name?.type === "required" && (
        <p className="error-message">Nome é obrigatório</p>
      )}
      <label htmlFor="name">Id:</label>
      <input
        className={errors?.id && "input-error"}
        min={1}
        type="number"
        placeholder="Id do Autor"
        name="id"
        {...register("id", { required: true })}
      />
      {errors?.id?.type === "required" && (
        <p className="error-message">Id é obrigatório</p>
      )}
      <label htmlFor="name">Email:</label>
      <input
        type="email"
        placeholder="Email do Autor"
        name="email"
        {...register("email")}

      />
      <Button>Criar Autor</Button>
    </form></Fieldset>
    
  );
};

export default AuthorForm;
