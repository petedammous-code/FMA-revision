---
id: ch09-application-cr-entre-sous-varietes-def
type: definition
chapter: 9
title: Application de classe $C^r$ / différentiable entre sous-variétés
ref: Définition IX.7.5
page: 160
importance: 3
depends: [ch09-sous-variete-def]
tags: [sous-variete, application-cr, parametrage-local, carte, lecture-dans-les-cartes]
---
## Intuition

> 💡 Pour étudier une application $\varphi:S_1\to S_2$ entre deux sous-variétés, on la **lit dans des cartes** : on part d'un point $u$ d'un ouvert $U_1\subset\R^{m_1}$, on monte sur $S_1$ par un paramétrage $x_1$, on applique $\varphi$, puis on redescend dans $U_2\subset\R^{m_2}$ par la carte $x_2^{-1}$ de $S_2$ :
> $$U_1\xrightarrow{\ x_1\ }S_1\xrightarrow{\ \varphi\ }S_2\xrightarrow{\ x_2^{-1}\ }U_2 .$$
> La composée $x_2^{-1}\circ\varphi\circ x_1$ va d'un ouvert de $\R^{m_1}$ dans $\R^{m_2}$ : le calcul différentiel usuel s'y applique.

On généralise ainsi [[ch09-fonction-differentiable-sur-sous-variete-def]] (cas $S_2=\R$). Les sous-variétés $S_1,S_2$ sont munies de la topologie induite par $\R^{N_1}$, $\R^{N_2}$, ce qui donne un sens à « $\varphi$ continue ». Les paramétrages et cartes sont ceux de [[ch09-sous-variete-def]] : $x_i:U_i\to S_i$ de classe $C^{k_i}$, immersif, homéomorphisme sur un ouvert $x_i(U_i)$ de $S_i$, de carte $x_i^{-1}$.

## Énoncé

**Définition (poly, Définition IX.7.5, p. 160).** Soit $\varphi:S_1\to S_2$ une application **continue** entre les sous-variétés (supposées de classe au moins $C^r$, $r\ge1$) $S_1$ et $S_2$ respectivement de $\R^{N_1}$ et $\R^{N_2}$.

On dit que $\varphi$ est **de classe $C^r$** (resp. **différentiable en $p\in S_1$**) si quels que soient les paramétrages
$$
x_1:U_1\to S_1,\qquad x_2:U_2\to S_2
$$
de $S_1$ et $S_2$, l'application $x_2^{-1}\circ\varphi\circ x_1$ définie sur
$$
x_1^{-1}\big(\varphi^{-1}(x_2(U_2))\cap x_1(U_1)\big)
$$
à valeurs dans $U_2$ est de classe $C^r$ (resp. différentiable en $x_1^{-1}(p)$).

(Pour « différentiable en $p$ », on ne considère évidemment que les paramétrages avec $p\in x_1(U_1)$ et $\varphi(p)\in x_2(U_2)$, sans quoi $x_1^{-1}(p)$ n'est pas dans le domaine.)

## Hypothèses

### H1 — $\varphi$ est continue

**Rôle.** Elle garantit que le domaine $D=x_1^{-1}\big(\varphi^{-1}(x_2(U_2))\cap x_1(U_1)\big)$ est un **ouvert** de $\R^{m_1}$ : $x_2(U_2)$ est ouvert dans $S_2$, donc $\varphi^{-1}(x_2(U_2))$ est ouvert dans $S_1$ ; son intersection avec l'ouvert $x_1(U_1)$ de $S_1$ est ouverte, et son image réciproque par l'application continue $x_1$ est ouverte dans $U_1$. Parler de différentiabilité sur $D$ a alors un sens.

**Si on la retire.** $S_1=S_2=\R$ et $\varphi=\mathbb 1_{\Q}$ (indicatrice des rationnels). Avec $x_1=\mathrm{id}_\R$ et $x_2$ l'inclusion de $U_2=]-\frac12,\frac12[$ dans $\R$, le domaine est $\varphi^{-1}(]-\frac12,\frac12[)=\R\setminus\Q$, qui n'est pas ouvert : « $x_2^{-1}\circ\varphi\circ x_1$ est $C^r$ sur $D$ » n'a pas de sens usuel.

### H2 — $S_1$ et $S_2$ de classe au moins $C^r$

**Rôle.** Les changements de paramétrage sont alors des $C^r$-difféomorphismes au moins ([[ch09-changement-parametrage]]), ce qui rend la notion indépendante des cartes et permet de n'en tester qu'un couple ([[ch09-remarques-applications-cr]], point 1).

**Si on la retire.** Même phénomène que pour les fonctions : si $S_1=S_2=\mathrm{Graphe}(t\mapsto t|t|)$ (classe $C^1$ seulement) et $r=2$, l'identité $\varphi=\mathrm{id}_{S_1}$ n'est pas « $C^2 $ » pour tous les couples de paramétrages : avec $x_1(t)=(t,t|t|)$ et $x_2=x_1\circ\theta$, $\theta(s)=s+s|s|$, on a $x_2^{-1}\circ\mathrm{id}\circ x_1=\theta^{-1}$, qui n'est pas $C^2$ (pour $t>0$, $\theta^{-1}(t)=\frac{-1+\sqrt{1+4t}}2$, de dérivée $\frac1{\sqrt{1+4t}}$, dont la dérivée vaut $-2$ en $0^+$, et $+2$ en $0^-$ par imparité). L'identité ne serait pas $C^2$ : notion absurde.

### H3 — « quels que soient les paramétrages »

**Rôle.** Rend la définition intrinsèque. Grâce à [[ch09-changement-parametrage]], il suffit en pratique d'un couple de paramétrages en chaque point ([[ch09-remarques-applications-cr]], point 1).

## Exemples

* **Cas $S_2=\R$ (ou $\R^n$).** $\R$ est un ouvert de lui-même, paramétré par l'identité ; pour $x_2=\mathrm{id}_\R$, $x_2^{-1}\circ\varphi\circ x_1=\varphi\circ x_1$ : on retrouve la Définition IX.7.1 (pour $\varphi$ continue). Les autres paramétrages $x_2$ de $\R$ sont des $C^r$-difféomorphismes entre ouverts de $\R$, ce qui ne change rien.
* **Application $z\mapsto z^2$ du cercle.** $\varphi:\mathbb S^1\to\mathbb S^1$, $\varphi(X,Y)=(X^2-Y^2,2XY)$ (continue, à valeurs dans $\mathbb S^1$ car $(X^2-Y^2)^2+4X^2Y^2=(X^2+Y^2)^2=1$). Avec $x_1(t)=(\cos t,\sin t)$, $t\in]-\frac\pi2,\frac\pi2[$, et $x_2(s)=(\cos s,\sin s)$, $s\in]-\pi,\pi[$ : $\varphi(x_1(t))=(\cos2t,\sin2t)$ avec $2t\in]-\pi,\pi[$, donc le domaine est $]-\frac\pi2,\frac\pi2[$ tout entier et $x_2^{-1}\circ\varphi\circ x_1(t)=2t$, de classe $C^\infty$.
* **Antipodie de la sphère.** $a:\mathbb S^2\to\mathbb S^2$, $a(P)=-P$. Avec $x_1(u,v)=(u,v,\sqrt{1-u^2-v^2})$ (hémisphère nord) et $x_2(u,v)=(u,v,-\sqrt{1-u^2-v^2})$ (hémisphère sud), sur le disque unité : $a(x_1(u,v))=(-u,-v,-\sqrt{1-u^2-v^2})=x_2(-u,-v)$, donc $x_2^{-1}\circ a\circ x_1(u,v)=(-u,-v)$, linéaire. En faisant de même avec les six hémisphères, on obtient que $a$ est $C^\infty$ (point 1 de [[ch09-remarques-applications-cr]]).

## Pièges

* > ⚠️ La continuité de $\varphi$ est une hypothèse **préalable** de la définition (H1) ; une application « $C^r$ » au sens de la définition est en particulier continue.
* > ⚠️ Le domaine de $x_2^{-1}\circ\varphi\circ x_1$ n'est pas $U_1$ en général, mais l'ouvert $x_1^{-1}\big(\varphi^{-1}(x_2(U_2))\cap x_1(U_1)\big)$ : les points de $U_1$ dont l'image par $\varphi\circ x_1$ est couverte par $x_2$.
* $x_2^{-1}$ n'est définie que sur $x_2(U_2)\subset S_2$ ; on ne la dérive jamais directement. La régularité de la composée est une propriété d'une application entre ouverts de $\R^{m_1}$ et $\R^{m_2}$.
* Ne pas confondre avec la différentiabilité de $\varphi$ comme application vers $\R^{N_2}$ : les deux notions coïncident ([[ch09-remarques-applications-cr]], point 2), mais il faut le démontrer.
* La différentielle $d\varphi_p$, application linéaire $T_pS_1\to T_{\varphi(p)}S_2$, sera définie ensuite ([[ch09-differentielle-entre-sous-varietes-def]]).
