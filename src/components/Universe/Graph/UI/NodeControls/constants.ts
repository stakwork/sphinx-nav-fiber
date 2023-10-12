export const buttonColors = (active: boolean) => ({
  close: {
    backgroundColor: 'rgba(48, 51, 66, 1)',
    borderColor: '#fff',
    fontColor: 'rgba(255, 255, 255, 1)',
  },
  focus: {
    backgroundColor: active ? 'rgba(255, 255, 255, 0.90);' : 'rgba(255, 255, 255, 0.90)',
    borderColor: active ? '#FFDB58bb' : '#fff',
    fontColor: active ? 'rgba(48, 51, 66, 1)' : 'rgba(48, 51, 66, 1)',
  },
  menu: {
    backgroundColor: '#00000066',
    borderColor: active ? '#ffffff66' : '#5078f2',
    fontColor: active ? '#ffffff66' : '#fff',
  },
})
