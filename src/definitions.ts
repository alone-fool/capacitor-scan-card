declare module "@capacitor/core" {
  interface PluginRegistry {
    scanCard: scanCardPlugin;
  }
}

export interface scanCardPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  // checkCameraHardware(): Boolean;
}
