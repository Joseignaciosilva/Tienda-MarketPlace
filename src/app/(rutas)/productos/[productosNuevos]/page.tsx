interface Props {
  params: {
    productosNuevos: string;
  };
}

export default async function ProductosNuevosPage({ params }: Props) {
  const { productosNuevos } = params;

  return (
    <div>
      <p>Estos son los productos nuevos de: <strong>{productosNuevos}</strong></p>
    </div>
  );
}
