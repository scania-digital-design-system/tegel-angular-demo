export type Notification = {
  content: string;
  type: 'error' | 'success' | 'information' | 'warning';
};

declare global {
  interface HTMLElementEventMap {
    tdsToggle: CustomEvent;
    tdsChange: CustomEvent;
    tdsClose: CustomEvent;
    tdsClick: CustomEvent;
    tdsInput: CustomEvent;
    tdsPageChange: CustomEvent;
    tdsSortChange: CustomEvent;
    tdsSelect: CustomEvent;
    tdsSelectAll: CustomEvent;
  }
}
