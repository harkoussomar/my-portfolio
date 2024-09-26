export default function CategorySelected({
  name,
  categorySelected,
  onCategorySelected,
}) {
  return (
    <>
      {categorySelected === name ? (
        <span className="work__item work__item-active">{name}</span>
      ) : (
        <span className="work__item" onClick={() => onCategorySelected(prev => name)}>
          {name}
        </span>
      )}
    </>
  );
}
