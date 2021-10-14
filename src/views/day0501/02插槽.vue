<template>
  <div>
    <Panel>
      <div>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </div>
    </Panel>
    <Panel>
      <template>
        <div slot:twoName>
          <p>云想衣裳花想容,</p>
          <p>春风拂槛露华浓.</p>
          <p>若非群玉山头见,</p>
          <p>会向瑶台月下逢.</p>
        </div>
      </template>
    </Panel>
    <Panel> 
        <template v-slot:thr="{row}">
            <p>{{row.name}}-{{row.age}}</p>


        </template>
    </Panel>
    <Panel />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
</style>