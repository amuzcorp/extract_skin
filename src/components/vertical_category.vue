<template>
  <div class="vertical-category">
    <h2>카테고리</h2>
    <div class="category-wrap">
      <b-navbar type="white" variant="white" class="ex-main-nav">
        <b-collapse id="" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown ref="dropdown">
              <template #button-content>
                <icon-slot
                  :iconClass="'main-nav-item'"
                  :iconName="'pdfBook'"
                  :svgHeight="20"
                  :svgWidth="20"
                  :iconColor="'#424a5d'"
                />
                PDF책
                <icon-slot :iconName="'chvronRight'" />
              </template>
              <b-nav-item href="#" active>노하우</b-nav-item>
              <b-nav-item href="#">재테크</b-nav-item>
              <b-nav-item href="#">시집</b-nav-item>
              <b-nav-item href="#">자소서</b-nav-item>
              <b-nav-item href="#">템플릿</b-nav-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'report'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              보고서
            </b-nav-item>
            <b-nav-item href="#" active>
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'start'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              스타트업
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'drawing'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              설계/도면
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'phrases'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              디지털문구
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'workbook'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              문제집/족보
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'pictorial'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              화보
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'font'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              폰트
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'program'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              프로그램
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'design'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              디자인
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'music'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              브금
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'videoClip'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              영상클립
            </b-nav-item>
            <b-nav-item href="#">
              <icon-slot
                :iconClass="'main-nav-item'"
                :iconName="'model'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#424a5d'"
              />
              모델/초상권
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
import iconSlot from "@/components/icon-slot.vue";

export default {
  name: "vertical_header",
  components: {
    iconSlot,
  },
};
</script>
<style></style>
