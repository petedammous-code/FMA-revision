---
id: ch09-changement-parametrage-differentielle-seconde
type: proposition
chapter: 9
title: Comportement de $d^2(f\circ x)$ par changement de paramétrage ; pourquoi la hessienne n'est définie qu'aux points critiques (formules (IX.7.2)-(IX.7.4))
ref: Formule (IX.7.2)
page: 170
importance: 2
depends: [ch09-changement-parametrage, ch09-differentielle-entre-sous-varietes-def, ch05-composition-differentielles, ch05-formule-leibniz, ch05-differentielle-seconde-def, ch05-lemme-schwarz]
tags: [differentielle-seconde, changement-de-parametrage, hessienne, point-critique, sous-variete, chaine]
---
## Intuition

> 💡 La différentielle seconde mesure la **courbure** d'une fonction, c'est-à-dire l'écart à son approximation linéaire. Sur une sous-variété, on la lit dans un paramétrage $x$ ; mais un autre paramétrage $x_1=x\circ h$ « parcourt » $S$ à une vitesse non uniforme, et cette **accélération** du changement de variables ($d^2h$) se mélange à la courbure de $f$ — sauf si la pente de $f$ est nulle. Image en dimension $1$ : la position d'une voiture, $t\mapsto f(t)$, n'a pas la même dérivée seconde si l'on change d'horloge $t=h(s)$ : $(f\circ h)''=f''(h')^2+f'h''$. Le terme parasite $f'h''$ disparaît exactement quand $f'=0$.

Rappels : $d^2G_a$ est la différentielle seconde d'une application $G$ définie sur un ouvert de $\R^m$, vue comme application bilinéaire : $d^2G_a(k,l)=\big(d(dG)_a(k)\big)(l)$ ([[ch05-differentielle-seconde-def]]), symétrique si $G$ est $C^2$ ([[ch05-lemme-schwarz]]). Un changement de paramétrage est un difféomorphisme entre ouverts de $\R^m$ ([[ch09-changement-parametrage]]). $d(x^{-1})_p:T_pS_1\to\R^m$ est la différentielle de la carte $x^{-1}$ ; c'est l'inverse de l'isomorphisme $dx_q:\R^m\to T_pS_1$ (dériver $x^{-1}\circ x=\mathrm{Id}_U$).

## Énoncé

**Proposition (poly, Formule (IX.7.2), p. 170).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$) et $f : S_1\to S_2$ une application, $S_1$, $S_2$ et $f$ étant de classe au moins $C^2$. Soit $x:U\to S_1$ un paramétrage local de $S_1$ en $p$, $q=x^{-1}(p)$, et soit $h:U_1\to U$ un difféomorphisme (de classe $C^2$) d'un autre ouvert $U_1$ de $\R^m$ sur $U$ ; on considère le paramétrage local $x_1=x\circ h:U_1\to S_1$ et $q_1\in U_1$ tel que $p=x_1(q_1)$ (donc $h(q_1)=q$). Alors
$$
\text{(IX.7.2)}\qquad d^2(f\circ x_1)_{q_1}=d(f\circ x)_q\circ d^2h_{q_1}+d^2(f\circ x)_q(dh_{q_1},dh_{q_1}),
$$
c'est-à-dire, pour tous $k,l\in\R^m$ : $d^2(f\circ x_1)_{q_1}(k,l)=d(f\circ x)_q\big(d^2h_{q_1}(k,l)\big)+d^2(f\circ x)_q\big(dh_{q_1}(k),dh_{q_1}(l)\big)$.

Le premier terme dépend du paramétrage (via $d^2h$) : on ne peut pas en général définir de différentielle seconde de $f$ en $p$. En revanche, si $df_p$ s'annule, on a $d(f\circ x)_q=df_p\circ dx_q=0$, et donc
$$
\text{(IX.7.3)}\qquad d^2(f\circ x_1)_{q_1}=d^2(f\circ x)_q(dh_{q_1},dh_{q_1}).
$$
Ceci permet de définir pour tout $v,w\in T_pS_1$
$$
\text{(IX.7.4)}\qquad d^2f_p(v,w)=d^2(f\circ x)_q\big(d(x^{-1})_p(v),d(x^{-1})_p(w)\big),
$$
et cette quantité est indépendante du paramétrage choisi.

## Hypothèses

### H1 — Régularité $C^2$ ($S_1$, $S_2$, $f$, et donc les changements de paramétrage)

**Rôle.** Il faut que $f\circ x$, $f\circ x_1$ et $h$ soient deux fois différentiables pour écrire (IX.7.2). Si $S_1$ est de classe $C^2$, tout changement de paramétrage est un $C^2$-difféomorphisme (Proposition IX.6.1), ce qui rend (IX.7.4) indépendante de **tout** paramétrage, pas seulement de ceux de la forme $x\circ h$ avec $h$ donné.

**Si on la retire.** Pour une structure seulement $C^1$, les changements de paramétrage ne sont que $C^1$ et la différentielle seconde peut ne pas exister dans l'un d'eux. Sur $S_1=S_2=\R$, $f=\mathrm{Id}$, prenons $x(u)=u$ et $x_1=h$ avec $h(u)=u+u\abs{u}$. Alors $h'(u)=1+2\abs{u}\ge1$ : $h$ est un $C^1$-difféomorphisme de $\R$ (paramétrage $C^1$ admissible), mais $h'$ n'est pas dérivable en $0$. Ainsi $f\circ x=\mathrm{Id}$ est $C^\infty$ alors que $f\circ x_1=h$ n'est pas deux fois dérivable en $0$ : (IX.7.2) n'a pas de sens.

### H2 — Pour (IX.7.3) et (IX.7.4) : $df_p=0$

**Rôle.** C'est elle qui tue le terme $d(f\circ x)_q\circ d^2h_{q_1}$, seul terme qui dépend de $d^2h$, donc du choix du paramétrage au second ordre.

**Si on la retire.** $S_1=S_2=\R$, $f(t)=t$ (donc $df_0=\mathrm{Id}\neq0$), $p=0$, $x(u)=u$ et $x_1=x\circ h$ avec $h(u)=u+u^2$ sur $U_1=]-\frac12,+\infty[$ ($h'(u)=1+2u>0$, $h$ est un difféomorphisme de $U_1$ sur $]-\frac14,+\infty[$), $q_1=0$. Alors $(f\circ x)''(0)=0$ mais $(f\circ x_1)''(0)=h''(0)=2$. Pour $v=1\in T_0\R=\R$ : $d(x^{-1})_0(v)=1$ et $d(x_1^{-1})_0(v)=1/h'(0)=1$, donc la formule (IX.7.4) donnerait « $d^2f_0(1,1)$ » $=0$ avec $x$ et $=2$ avec $x_1$ : elle ne définit rien. C'est exactement le terme $d(f\circ x)_0(d^2h_0(1,1))=1\cdot2$ de (IX.7.2).

## Idée de la preuve

Règle de la chaîne : $d(f\circ x_1)_u=d(f\circ x)_{h(u)}\circ dh_u$, composée bilinéaire de deux fonctions de $u$. On redérive avec la formule de Leibniz : un terme en $d^2(f\circ x)$ (via $dh$, deux fois) et un terme en $d^2h$. Si $d(f\circ x)_q=0$, seul le premier reste, et $dh_{q_1}$ se simplifie avec $d(x_1^{-1})_p=(dh_{q_1})^{-1}\circ d(x^{-1})_p$.

## Preuve

Posons $G=f\circ x:U\to\R^{N_2}$ ; elle est de classe $C^2$ (lecture de $f$, de classe $C^2$, dans un paramétrage), et $f\circ x_1=G\circ h$.

**Étape 1 : différentielle première.** Par la règle de la chaîne ([[ch05-composition-differentielles]]), pour $u\in U_1$,
$$
d(G\circ h)_u=dG_{h(u)}\circ dh_u .
$$
Ainsi $u\mapsto d(G\circ h)_u$ est la composée de $u\mapsto\big(dG_{h(u)},dh_u\big)\in\mathcal L(\R^m;\R^{N_2})\times\mathcal L(\R^m;\R^m)$ et de l'application **bilinéaire** (continue, on est en dimension finie) de composition $B:(L,M)\mapsto L\circ M$, à valeurs dans $\mathcal L(\R^m;\R^{N_2})$.

**Étape 2 : différentielle seconde (formule (IX.7.2)).** Par la formule de Leibniz ([[ch05-formule-leibniz]]), pour $k\in\R^m$,
$$
d\big(d(G\circ h)\big)_u(k)=\Big(d(dG\circ h)_u(k)\Big)\circ dh_u+dG_{h(u)}\circ\Big(d(dh)_u(k)\Big).
$$
Par la règle de la chaîne, $d(dG\circ h)_u(k)=d(dG)_{h(u)}\big(dh_u(k)\big)$, qui est l'application linéaire $l'\mapsto d^2G_{h(u)}(dh_u(k),l')$ ; et $d(dh)_u(k)$ est l'application linéaire $l\mapsto d^2h_u(k,l)$. En appliquant à $l\in\R^m$ et en prenant $u=q_1$, $h(q_1)=q$ :
$$
d^2(f\circ x_1)_{q_1}(k,l)=d^2G_q\big(dh_{q_1}(k),dh_{q_1}(l)\big)+dG_q\big(d^2h_{q_1}(k,l)\big),
$$
ce qui est (IX.7.2). Le premier terme est une application bilinéaire $d^2(f\circ x)_q$ évaluée en $(dh_{q_1}k,dh_{q_1}l)$ ; le second est l'application linéaire $d(f\circ x)_q$ appliquée à la bilinéaire $d^2h_{q_1}$, à valeurs dans $\R^m$.

**Étape 3 : cas d'un point critique (formule (IX.7.3)).** Si $df_p=0$, la propriété 1 de la Définition IX.7.15 ([[ch09-differentielle-entre-sous-varietes-def]]) donne $dG_q(w)=d(f\circ x)_q(w)=df_p(dx_q(w))=0$ pour tout $w$, donc $dG_q=0$ et le second terme disparaît : $d^2(f\circ x_1)_{q_1}=d^2(f\circ x)_q(dh_{q_1},dh_{q_1})$.

**Étape 4 : indépendance de (IX.7.4).** Sur $x_1(U_1)=x(U)$, on a $x_1^{-1}=h^{-1}\circ x^{-1}$, donc $d(x_1^{-1})_p=d(h^{-1})_q\circ d(x^{-1})_p=(dh_{q_1})^{-1}\circ d(x^{-1})_p$. Pour $v,w\in T_pS_1$, par (IX.7.3) :
$$
\begin{aligned}
d^2(f\circ x_1)_{q_1}\big(d(x_1^{-1})_p(v),d(x_1^{-1})_p(w)\big)
&=d^2(f\circ x)_q\big(dh_{q_1}(dh_{q_1})^{-1}d(x^{-1})_p(v),\ dh_{q_1}(dh_{q_1})^{-1}d(x^{-1})_p(w)\big)\\
&=d^2(f\circ x)_q\big(d(x^{-1})_p(v),d(x^{-1})_p(w)\big).
\end{aligned}
$$
Enfin, si $\tilde x:\tilde U\to S_1$ est un paramétrage local **quelconque** en $p$, la Proposition IX.6.1 ([[ch09-changement-parametrage]]) montre que, sur un voisinage ouvert de $\tilde x^{-1}(p)$, $\tilde x=x\circ\theta$ avec $\theta=x^{-1}\circ\tilde x$ difféomorphisme de classe $C^2$ entre ouverts de $\R^m$ ; la différentielle seconde en un point ne dépendant que des valeurs au voisinage de ce point, on applique ce qui précède avec $h=\theta$. Donc (IX.7.4) ne dépend pas du paramétrage. $\square$

## Preuve à trous

Soit $G=f\circ x$, de sorte que $f\circ x_1=G\circ h$. La règle de la chaîne donne <trou>$d(G\circ h)_u=dG_{h(u)}\circ dh_u$</trou>, que l'on voit comme la composée de $u\mapsto(dG_{h(u)},dh_u)$ et de l'application bilinéaire $(L,M)\mapsto L\circ M$. En dérivant par <trou indice="dérivée d'une expression bilinéaire en deux fonctions">la formule de Leibniz</trou>, puis en utilisant $d(dG\circ h)_u(k)=d(dG)_{h(u)}(dh_u(k))$, on obtient
$$
d^2(f\circ x_1)_{q_1}(k,l)=d^2G_q\big(dh_{q_1}k,dh_{q_1}l\big)+dG_q\big(d^2h_{q_1}(k,l)\big).
$$
Si $df_p=0$, alors <trou indice="propriété 1 de la définition de la différentielle">$dG_q=df_p\circ dx_q=0$</trou>, et il ne reste que $d^2G_q(dh_{q_1}\cdot,dh_{q_1}\cdot)$. Comme $x_1^{-1}=h^{-1}\circ x^{-1}$, <trou indice="différentielle de la carte x_1^{-1}">$d(x_1^{-1})_p=(dh_{q_1})^{-1}\circ d(x^{-1})_p$</trou>, et les facteurs $dh_{q_1}$ et $(dh_{q_1})^{-1}$ se simplifient dans (IX.7.4) : la valeur est la même pour $x$ et pour $x_1$. $\square$

## Exemples

* **Forme matricielle (cas $S_2=\R$).** Notons $J=\mathrm{Jac}\,h(q_1)$, $H_G=\mathrm{Hess}(f\circ x)(q)$ et $h=(h_1,\dots,h_m)$. Alors (IX.7.2) s'écrit
$$
\mathrm{Hess}(f\circ x_1)(q_1)=J^{\mathsf T}H_G\,J+\sum_{j=1}^m\frac{\partial(f\circ x)}{\partial u_j}(q)\,\mathrm{Hess}(h_j)(q_1),
$$
et le second terme disparaît au point critique : la hessienne se transforme alors comme une **forme quadratique** ($H\mapsto J^{\mathsf T}HJ$), ce qui est le signe d'un objet intrinsèque.
* **Altitude sur le cercle, point non critique.** $S_1=\mathbb S^1$, $f(x,y)=y$, $p=(1,0)$, $x(\theta)=(\cos\theta,\sin\theta)$, $q=0$, et $h(u)=u+u^2$ (difféomorphisme près de $0$), $x_1=x\circ h$. Alors $f\circ x=\sin$, $(f\circ x)''(0)=0$, mais $(f\circ x_1)(u)=\sin(u+u^2)$ a pour dérivée seconde $-\sin(u+u^2)(1+2u)^2+2\cos(u+u^2)$, qui vaut $2$ en $0$. Vérification par (IX.7.2) : $\cos(0)\cdot h''(0)+(-\sin 0)\cdot h'(0)^2=2$. Comme $h'(0)=1$, les deux paramétrages envoient $1$ sur le même vecteur tangent $(0,1)$ : la « dérivée seconde de $f$ dans la direction $(0,1)$ » vaudrait $0$ ou $2$ selon le paramétrage.
* **Même fonction, point critique.** $p=(0,1)$ (où $df_p=0$), $q=\frac\pi2$, $h(u)=\frac\pi2+u+u^2$, $q_1=0$. On a $(f\circ x)''(\frac\pi2)=-\sin\frac\pi2=-1$ et $(f\circ x_1)(u)=\cos(u+u^2)$, de dérivée seconde $-\cos(u+u^2)(1+2u)^2-2\sin(u+u^2)$, qui vaut $-1$ en $0$ ; (IX.7.3) donne bien $(-1)\cdot h'(0)^2=-1$. La valeur $d^2f_p(v,v)=-1$ pour $v=dx_q(1)=(-1,0)$ est intrinsèque.

## Pièges

* > ⚠️ En un point **non critique**, « la hessienne de $f$ sur $S$ » n'a pas de sens intrinsèque : la matrice $\mathrm{Hess}(f\circ x)(q)$ dépend du paramétrage. Ne pas l'utiliser pour classer un point qui n'est pas critique.
* L'ordre des opérations dans (IX.7.2) : $d(f\circ x)_q\circ d^2h_{q_1}$ veut dire « on applique d'abord la bilinéaire $d^2h_{q_1}$ (à valeurs dans $\R^m$), puis la linéaire $d(f\circ x)_q$ » ; et $d^2(f\circ x)_q(dh_{q_1},dh_{q_1})$ veut dire $(k,l)\mapsto d^2(f\circ x)_q(dh_{q_1}k,dh_{q_1}l)$.
* $d(x^{-1})_p$ est défini sur $T_pS_1$ (pas sur $\R^{N_1}$) : c'est l'inverse de $dx_q:\R^m\to T_pS_1$. En particulier $d(x^{-1})_p(x_{u_i}(q))=e_i$, et la matrice de $d^2f_p$ dans la base $(x_{u_i}(q))_i$ est $\mathrm{Hess}(f\circ x)(q)$.
* La définition (IX.7.4) donne la **hessienne** ([[ch09-hessienne-def]]) ; elle n'est pas $d^2g_p|_{T_pS_1}$ pour un prolongement $g$ de $f$, sauf si $dg_p=0$.
