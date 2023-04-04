const CarColorPicker = () => {
    return <div> <h2>ColorPicker</h2>
    <div>
      <Image
        scr={'/vehicles/crosstrek/colors/crosstrek-${activeColor.hex}.webp'}
        alt={'Crosstrek ${activeColor.name}'}
      />
    </div>
    
   
    <ul>
      {colors.map((color) => {
        return <Swatch color={color} />
      })}
    </ul>
    <h3>Color name</h3></div>
}
export default CarColorPicker