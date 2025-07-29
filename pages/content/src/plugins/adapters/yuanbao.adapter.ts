
import { BaseAdapter } from './base.adapter';

export class YuanbaoAdapter extends BaseAdapter {
  constructor() {
    super();
  }

  public getToolButtons(): HTMLElement[] {
    return [];
  }

  public getToolIcon(): HTMLElement | null {
    return null;
  }

  public getTextArea(): HTMLTextAreaElement | null {
    return null;
  }

  public getChatContainer(): HTMLElement | null {
    return null;
  }
}
