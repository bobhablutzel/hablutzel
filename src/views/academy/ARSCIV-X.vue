<template>
  <panel header="The ARSCIV-X Model">
    <div class="text-container">
      <p>Organizations often adopt
        <a href="https://en.wikipedia.org/wiki/Responsibility_assignment_matrix" target="_blank">
          responsibility assignment matrices</a>, often known as RACI models, in order to articulate the
        roles and responsibilities of various stakeholders in the organization. While wholeheartedly supporting
        these models, it's also important to recognize that the simpler models don't often provide
        enough clarity for large-scale architecture practices. In particular, they</p>
      <ul>
        <li>Don't account for the necessary handoff between architecture and engineering; and</li>
        <li>Risk creating confusion on who is leading the effort</li>
      </ul>
      <p>One can adopt an <i>ARSCIV-X</i> model to address these short comings. In the ARSCIV-X
        approach, there are unique roles for the leader of an initiative vs the participants, and
        for the individuals required to sign off on the work before it is considered complete.
      </p>
      <p>The ARSCIV-X model has the following roles:</p>
      <ul>
        <li>A: The <i>accountable</i> party. Typically an executive sponsoring a broad program requiring architectural
          guidance.
        </li>
        <li>R: The <i>responsible</i> party. This is the uniquely named individual who is "on the hook" to make sure the
          architectural guidance is appropriately developed.
        </li>
        <li>S: A <i>supporting</i> member. This role is part of the working group actively seeking to create architectural
        guidance, under the leadership of the responsible party.
        </li>
        <li>C: A <i>consulted</i> member. This role is not part of the working group on a regular basis, but will be
        brought in for their specific expertise as required.</li>
        <li>I: An <i>informed</i> member. This role is not a part of the working group, but may be kept apprised of
        progress, and is particularly apprised when the working group concludes.</li>
        <li>V: A <i>verifying</i> member. This role reviews the recommendation of the working group, but is not
        a part of the working group. The intent of this role is to have an unbiased third party review.</li>
        <li>X: An <i>accepting</i> member. This role takes the architectural recommendations and implements them, so
        has to be comfortable that the architecture as specified is viable.</li>
      </ul>
      <p>The ARSCIV-X model is complex, and, depending on the organization, might feel like overkill at first.
      However, understanding the unique nature of each role in the architecture process is important, even if
      some roles are deemed unnecessary (or, more practically, if individuals fulfill multiple roles.</p>
      <p>There are some basic rules for implementing ARSCIV-X:</p>
      <ul>
        <li>A person holding the <i>A</i> role <b>MAY</b> hold the <i>R</i>, <i>V</i>, <i>C</i>, <i>I</i> or
          <i>X</i> roles but <b>SHOULD NOT</b> hold the <i>S</i> role.</li>
        <li>A person holding an <i>R</i> or <i>S</i> role <b>MUST NOT</b> hold the <i>V</i> role.</li>
        <li>A person holding an <i>A</i> or <i>R</i> role <b>MAY</b> hold the <i>X</i> role.</li>
        <li>A person holding an <i>C</i> or <i>I</i> role <b>MAY</b> hold the <i>V</i> role.</li>
        <li>There is exactly one individual holding the <i>A</i> role</li>
        <li>There is exactly one individual holding the <i>R</i> role</li>
        <li>There are zero or more individuals holding the <i>S</i> role</li>
        <li>There are zero or more individuals holding the <i>C</i> role</li>
        <li>There are zero or more individuals holding the <i>I</i> role</li>
        <li>There are zero or more individuals holding the <i>V</i> role</li>
        <li>There are zero or more individuals holding the <i>X</i> role</li>
      </ul>
      
      <p>The ARSCIV-X model is an important part of the Architecture Decision Process. </p>

    </div>
  </panel>
</template>

<script>

export default {
  name: "DefiningArchitecture"
}
</script>

<style scoped>

</style>