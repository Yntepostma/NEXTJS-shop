import React from "react";
import Page from "../../components/Page";
import Input from "../../components/Input";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { fetchJSON } from "../../lib/api";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ error: false, loading: false });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, error: false });
    try {
      const response = await fetchJSON("http://localhost:1337/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password }),
      });
      setStatus({ loading: false, error: false });
      return response;
    } catch (e) {}
    setStatus({ loading: false, error: true });
  };

  return (
    <Page title="Sign-in">
      <form onSubmit={handleSubmit}>
        <Field label="email">
          <Input
            type="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label="password">
          <Input
            type="password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        {status.error && <p className="text-red-700">Invalid credentials</p>}
        {status.loading ? (
          <p>Loading....</p>
        ) : (
          <Button type="submit">submit</Button>
        )}
      </form>
    </Page>
  );
}
