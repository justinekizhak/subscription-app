const envVariables = {
  SUPABASE_PROJECT_ID: process.env.SUPABASE_PROJECT_ID,
  SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
};

const supabaseUrl = `https://${envVariables.SUPABASE_PROJECT_ID}.supabase.co`;

const requiredEnvVariables = Object.entries(envVariables).filter(
  ([key, value]) => !value
);

if (requiredEnvVariables.length) {
  throw new Error(
    `Missing required environment variables: ${requiredEnvVariables
      .map(([key]) => key)
      .join(", ")}`
  );
}

export const env = {
  ...envVariables,
  SUPABASE_URL: supabaseUrl,
  SUPABASE_REST_URL: `${supabaseUrl}/rest/v1`,
};
