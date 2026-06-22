const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("whisperStream", {
  getConfig: () => ipcRenderer.invoke("config:get"),
  transcribeChunk: (samples, meta) => ipcRenderer.invoke("audio:chunk", {
    samples,
    ...meta
  })
});

