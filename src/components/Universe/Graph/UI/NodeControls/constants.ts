export const buttonColors = (active: boolean) => ({
  close: {
    backgroundColor: '#00000066',
    borderColor: '#fff',
    fontColor: '#fff',
  },
  focus: {
    backgroundColor: active ? '#FFDB58bb' : '#fff',
    borderColor: active ? '#FFDB58bb' : '#fff',
    fontColor: active ? '#fff' : '#000',
  },
  menu: {
    backgroundColor: '#00000066',
    borderColor: active ? '#ffffff66' : '#5078f2',
    fontColor: active ? '#ffffff66' : '#fff',
  },
})
