export const ButtonSwitch = ({ children, active, ...props }) => {
  return (
    <button {...props} className={` px-4 py-1  rounded-lg text-coffee-white  ${active && 'bg-coffee-gray '}`}>
      {children}
    </button>
  )
}
