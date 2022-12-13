export function requestFullScreen(e: HTMLElement): void {
  if (e.requestFullscreen) {
    e.requestFullscreen();
  }
}

export function exitFullScreen(): void {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export function checkFullScreen() {
  return document.fullscreenElement;
}
