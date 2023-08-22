export type Notification = {
  content: string;
  type: 'error' | 'success' | 'information' | 'warning';
};

declare global {
  interface HTMLElementEventMap {
    tdsToggle: CustomEvent;
  }
}
