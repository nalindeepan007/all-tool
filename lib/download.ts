export function triggerVideoDownload(
  url: string,
  title: string,
  doc: Document = document
) {
  const link = doc.createElement("a");
  link.href = url;
  link.setAttribute("download", `${title}.mp4`);
  link.setAttribute("target", "_blank");
  doc.body.appendChild(link);
  link.click();
  doc.body.removeChild(link);
}
