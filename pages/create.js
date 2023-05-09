import Link from 'next/link.js';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Form from '../components/Form.js';
import { StyledLink } from '../components/StyledLink.js';

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();

  async function addPlace(place) {
    // console.log('Place added (but not really...)');
    const response = await fetch ("/api/places", {
      method: "POST",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
      await response.json();
      // places.mutate();
      // event.target.reset();
      router.push("/");
    } else {
    console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={'add-place'} />
    </>
  );
}


/*
- In `pages/create.js`, write the `addPlace` function to start a `POST` request.
- Write the `POST` API route in `pages/api/places/index.js`.
- Submitting the form should redirect the user to the homepage `/`.
*/

