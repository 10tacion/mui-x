// This file will be modified by the `postinstall` script.
// See postinstall/index.ts for more information.

export interface TelemetryContextType {
  config: {
    isInitialized: boolean;
  };
  traits: Record<string, any> & {
    fingerprint?: {
      fullHash?: string | null;
      coreHash?: string | null;
      components?: Record<string, any> | null;
    } | null;
    machineId?: string | null;
    projectId?: string | null;
    sessionId?: string | null;
    anonymousId?: string | null;
    isDocker?: boolean;
    isCI?: boolean;
  };
}

const defaultValue: TelemetryContextType = {
  config: {
    isInitialized: false,
  },
  traits: {},
};

export default defaultValue;
