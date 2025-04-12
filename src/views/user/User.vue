<template>
    <div class="common-main user-container">
      <el-space fill>
        <el-card>
          <template #header>
            <div style="display: flex; align-items: center; gap: 10px">
              <span style="font-size: 16px; font-weight: bold">个人中心</span>
              <el-tag type="info" size="small">visitor</el-tag>
            </div>
          </template>
  
          <div class="user-l-p1">
            <div style="font-weight: bold; margin-bottom: 12px">基本信息</div>
            <el-descriptions :column="1" border>
              <el-descriptions-item label="用户名称">visitor</el-descriptions-item>
              <el-descriptions-item label="用户性别">女</el-descriptions-item>
              <el-descriptions-item label="联系方式">18888888888</el-descriptions-item>
              <el-descriptions-item label="用户邮箱">chydmelon@gmail.com</el-descriptions-item>
              <el-descriptions-item label="用户角色">visitor</el-descriptions-item>
              <el-descriptions-item label="注册时间">2025-01-01 19:07:27</el-descriptions-item>
            </el-descriptions>
          </div>
  
          <div class="user-l-p2">
            <p>核心技术栈</p>
            <el-divider />
            <div style="display: flex; flex-direction: column; gap: 12px">
              <div style="display: flex; align-items: center; gap: 10px">
                <span style="width: 80px">Web（前端）</span>
                <el-progress :percentage="100" :show-text="false" style="flex: 1" />
              </div>
              <div style="display: flex; align-items: center; gap: 10px">
                <span style="width: 80px">Node.js</span>
                <el-progress :percentage="45" :show-text="false" style="flex: 1" />
              </div>
              <div style="display: flex; align-items: center; gap: 10px">
                <span style="width: 80px">Solidity</span>
                <el-progress :percentage="35" :show-text="false" style="flex: 1" />
              </div>
              <div style="display: flex; align-items: center; gap: 10px">
                <span style="width: 80px">React</span>
                <el-progress :percentage="85" :show-text="false" style="flex: 1" />
              </div>
              <div style="display: flex; align-items: center; gap: 10px">
                <span style="width: 80px">Vue</span>
                <el-progress :percentage="85" :show-text="false" style="flex: 1" />
              </div>
              <div style="display: flex; align-items: center; gap: 10px">
                <span style="width: 80px">Git</span>
                <el-progress :percentage="75" :show-text="false" style="flex: 1" />
              </div>
            </div>
          </div>
        </el-card>
  
        <!-- 时间线卡片 -->
        <el-card>
          <template #header>
              <span>时间线</span>
          </template>
  
          <el-timeline>
            <div class="user-r-body">
                <el-timeline-item timestamp="2025/03/15" placement="top">
                    <div class="user-r-title">欧盟对中国电动车加征关税</div>
                    <div>欧盟宣布对中国电动汽车征收最高25%附加关税，比亚迪、蔚来等企业回应将调整欧洲市场战略。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2025/02/10" placement="top">
                    <div class="user-r-title">美国对华芯片禁令升级</div>
                    <div>限制AI芯片及制造设备出口，长江存储、中芯国际股价单日跌幅超15%。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2025/01/20" placement="top">
                    <div class="user-r-title">RCEP全面生效</div>
                    <div>区域全面经济伙伴关系协定实现15国零关税，中日韩贸易额同比增长32%。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/12/15" placement="top">
                    <div class="user-r-title">中国下调部分消费品关税</div>
                    <div>国务院宣布2025年起降低婴幼儿奶粉、抗癌药等954项商品进口关税，平均税率降至5.7%。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/11/30" placement="top">
                    <div class="user-r-title">SpaceX星舰首次商业发射</div>
                    <div>成功将卫星送入轨道，人类商业航天进入新纪元。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/10/25" placement="top">
                    <div class="user-r-title">中国取消QFII限额</div>
                    <div>全面放开境外机构投资者额度限制，沪港通单日成交额创历史新高。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/09/18" placement="top">
                    <div class="user-r-title">微软发布Windows12</div>
                    <div>集成Copilot AI助手，支持全场景自然语言交互。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/08/22" placement="top">
                    <div class="user-r-title">中美达成气候联合声明</div>
                    <div>承诺2030年前共同削减甲烷排放量30%。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/07/05" placement="top">
                    <div class="user-r-title">中国对半导体材料出口管制</div>
                    <div>对镓、锗相关物项实施出口许可制，全球芯片产业链震荡。</div>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/06/30" placement="top">
                    <div class="user-r-title">DeepSeek-V4发布</div>
                    <div>多模态能力突破，支持图像、语音、文本全模态交互，API调用量单日破亿。</div>
                </el-timeline-item>
            </div>
          </el-timeline>
        </el-card>
      </el-space>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style lang="less">
  .user-container {
    .el-space {
        align-items: flex-start!important;
        width: 100%;
        display: flex;
        flex-wrap: nowrap!important;
        .el-space__item {
            min-width: auto!important;
        }
    }
    .user-l-p2 {
        margin-top: 40px;
    }
    .user-r-body {
        max-width: 500px;
        .user-r-title {
            font-weight: bold;
        }
        .el-timeline-item__content {
            color: #333;
        }
    }
  }

  </style>