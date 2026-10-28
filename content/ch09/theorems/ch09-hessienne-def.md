---
id: ch09-hessienne-def
type: definition
chapter: 9
title: Hessienne d'une fonction en un point critique
ref: Définition IX.7.38
page: 170
importance: 2
depends: [ch09-changement-parametrage-differentielle-seconde, ch09-point-critique-sous-variete-def, ch05-lemme-schwarz]
tags: [hessienne, point-critique, differentielle-seconde, forme-quadratique, sous-variete, extrema]
---
## Intuition

> 💡 En un point critique, la fonction est « plate » au premier ordre ; c'est le terme du second ordre qui dit si l'on est au fond d'une cuvette (minimum), au sommet d'un dôme (maximum) ou sur un col. La **hessienne** est cette forme quadratique, définie sur le plan tangent $T_pS$ : $d^2f_p(v,v)$ est l'« accélération » de $f$ quand on part de $p$ sur $S$ avec la vitesse $v$. On la calcule dans n'importe quel paramétrage : grâce à $df_p=0$, le résultat ne dépend pas du paramétrage ([[ch09-changement-parametrage-differentielle-seconde]]) — ce qui est **faux** en un point non critique.

Ingrédients : un **point critique** de $f:S\to\R$ est un point où $df_p=0$ ([[ch09-point-critique-sous-variete-def]]) ; $x:U\to S$ est un paramétrage local en $p$ avec $x(q)=p$ ; $dx^{-1}_p=d(x^{-1})_p:T_pS\to\R^m$ est la différentielle de la carte, inverse de $dx_q:\R^m\to T_pS$ ; $d^2(f\circ x)_q$ est la différentielle seconde usuelle de $f\circ x$ en $q$ ([[ch05-differentielle-seconde-def]]).

## Énoncé

**Définition (poly, Définition IX.7.38, p. 170).** Supposons que $p$ soit un point critique de la fonction $f : S\to\R$ de classe $C^2$ (sur une sous-variété $S$ de $\R^N$ de classe au moins $C^2$). Posons alors, quels que soient $v,w\in T_pS$,
$$
d^2f_p(v,w)=d^2(f\circ x)_q\big(dx^{-1}_p(v),dx^{-1}_p(w)\big)
$$
où $x$ est un paramétrage local de $S$ en $p$ et $q=x^{-1}(p)$. On a montré que cette définition est indépendante du paramétrage choisi (formules (IX.7.3)-(IX.7.4)).

Il découle des propriétés des différentielles secondes en calcul différentiel ordinaire que $d^2f_p$ est une **forme bilinéaire symétrique** sur $T_pS$ (poly, p. 171). On appelle cette forme la **hessienne** de $f$ au point critique $p$.

*Justification de la symétrie.* $d^2f_p$ est la composée de la forme bilinéaire $d^2(f\circ x)_q$, symétrique par le lemme de Schwarz ([[ch05-lemme-schwarz]]) puisque $f\circ x$ est $C^2$, avec l'application linéaire $dx^{-1}_p$ appliquée à chaque argument.

*En coordonnées.* Comme $dx^{-1}_p\big(x_{u_i}(q)\big)=e_i$, la matrice de $d^2f_p$ dans la base $(x_{u_1}(q),\dots,x_{u_m}(q))$ de $T_pS$ ([[ch09-base-espace-tangent]]) est la matrice hessienne $\Big(\dfrac{\partial^2(f\circ x)}{\partial u_i\partial u_j}(q)\Big)_{i,j}$.

*Calcul par les courbes* (poly, Exercice IX.7.39, p. 171). Si $\alpha:I\to S$ est une courbe de classe $C^2$ avec $\alpha(0)=p$ et $\alpha'(0)=v$, alors $d^2f_p(v,v)=\dfrac{d^2}{dt^2}\Big|_{t=0}f(\alpha(t))$. En effet, avec $G=f\circ x$ et $\gamma=x^{-1}\circ\alpha$ (de classe $C^2$, $\gamma(0)=q$, $\gamma'(0)=dx^{-1}_p(v)$), on a $(G\circ\gamma)''(0)=d^2G_q(\gamma'(0),\gamma'(0))+dG_q(\gamma''(0))$, et $dG_q=df_p\circ dx_q=0$.

## Hypothèses

### H1 — $p$ point critique ($df_p=0$) — indispensable

Sans elle, la formule dépend du paramétrage : pour $f(t)=t$ sur $S=\R$, avec $x(u)=u$ puis $x_1(u)=u+u^2$, on trouverait $0$ puis $2$ pour « $d^2f_0(1,1)$ » (voir [[ch09-changement-parametrage-differentielle-seconde]]). Il n'y a pas de hessienne intrinsèque en un point non critique.

### H2 — Régularité $C^2$ de $f$ et de $S$

Il faut $f\circ x$ deux fois différentiable (et $C^2$ pour la symétrie), et des changements de paramétrage $C^2$ pour l'indépendance vis-à-vis de **tous** les paramétrages ([[ch09-changement-parametrage]]).

### H3 — Domaine : $T_pS\times T_pS$

$d^2f_p$ est définie sur l'espace tangent (de dimension $m$), pas sur $\R^N$ ni sur $\R^m$ ; $dx^{-1}_p$ fait le pont entre $T_pS$ et $\R^m$.

## Exemples

* **Pôle nord de la sphère.** $f(x,y,z)=z$ sur $\mathbb S^2$, $p=e_3$ critique, $T_p\mathbb S^2=\{v_3=0\}$. Paramétrage $x(u_1,u_2)=(u_1,u_2,\sqrt{1-u_1^2-u_2^2})$, $q=0$ : $f\circ x(u)=\sqrt{1-\norm{u}^2}=1-\frac12\norm{u}^2+o(\norm{u}^2)$, donc $\mathrm{Hess}(f\circ x)(0)=-I_2$. Comme $dx_0(w)=(w_1,w_2,0)$, $dx^{-1}_p(v)=(v_1,v_2)$ et
$$
d^2f_p(v,w)=-(v_1w_1+v_2w_2)=-\langle v,w\rangle\qquad(v,w\in T_p\mathbb S^2) :
$$
forme définie négative, $p$ est un maximum local strict ([[ch09-hessienne-extrema-ordre-deux]]). Vérification par une courbe : $\alpha(t)=(\sin t,0,\cos t)$, $\alpha'(0)=(1,0,0)$, $f(\alpha(t))=\cos t$, de dérivée seconde $-1$ en $0$ : c'est bien $-\norm{(1,0,0)}^2$.
* **Col du tore.** $x(\theta,\varphi)=\big((a+r\cos\varphi)\cos\theta,(a+r\cos\varphi)\sin\theta,r\sin\varphi\big)$ ($0<r<a$), $f=$ première coordonnée, $p=x(0,\pi)=(a-r,0,0)$, point critique (voir [[ch09-extremum-local-differentielle-nulle]]). On a $f\circ x=(a+r\cos\varphi)\cos\theta$ et, en $(0,\pi)$ : $\partial^2_{\theta\theta}=-(a-r)$, $\partial^2_{\varphi\varphi}=r$, $\partial^2_{\theta\varphi}=r\sin\varphi\sin\theta=0$. Les vecteurs de base sont $x_\theta=(0,a-r,0)$ et $x_\varphi=(0,0,-r)$, donc pour $v=(0,v_2,v_3)\in T_pS$ : $dx^{-1}_p(v)=\big(\frac{v_2}{a-r},-\frac{v_3}{r}\big)$ et
$$
d^2f_p(v,v)=-\frac{v_2^2}{a-r}+\frac{v_3^2}{r} :
$$
forme non dégénérée de signature $(1,1)$, c'est un col (lemme de Morse : [[ch09-lemme-morse-sous-variete]]).
* **Quotient de Rayleigh.** $A$ symétrique, $f(v)=\langle Av,v\rangle$ sur $\mathbb S^{N-1}$, $e$ vecteur propre unitaire, $Ae=\lambda e$ (point critique). Pour $w\perp e$ unitaire, la courbe $\alpha(t)=\cos t\,e+\sin t\,w$ reste sur la sphère, et $f(\alpha(t))=\lambda\cos^2t+\langle Aw,w\rangle\sin^2t$ (le terme croisé $2\sin t\cos t\langle Ae,w\rangle$ est nul car $\langle Ae,w\rangle=\lambda\langle e,w\rangle=0$). D'où $d^2f_e(w,w)=2\big(\langle Aw,w\rangle-\lambda\big)$, et par homogénéité $d^2f_e(w,w)=2\big(\langle Aw,w\rangle-\lambda\norm{w}^2\big)$ pour $w\in e^\perp$. Au maximum ($\lambda=\lambda_{\max}$) cette forme est bien négative.

## Pièges

* > ⚠️ **Pas de hessienne hors des points critiques.** La matrice $\mathrm{Hess}(f\circ x)(q)$ existe toujours, mais elle ne définit un objet intrinsèque sur $T_pS$ que si $df_p=0$.
* > ⚠️ Si $f=g|_S$ avec $g$ définie sur un ouvert de $\R^N$, **en général $d^2f_p\neq d^2g_p|_{T_pS}$** : le long d'une courbe $\alpha$ de $S$, $d^2f_p(v,v)=d^2g_p(v,v)+dg_p(\alpha''(0))$, et le terme $dg_p(\alpha''(0))$ (courbure de $S$) ne s'annule que si $dg_p=0$. Exemple : $g=z$ est linéaire ($d^2g=0$) mais sur $\mathbb S^2$ au pôle nord $d^2f_p=-\langle\cdot,\cdot\rangle$, car $dg_p(\alpha''(0))=\langle e_3,(0,0,-1)\rangle=-1$.
* Ne pas oublier le facteur $dx^{-1}_p$ : la hessienne de $f\circ x$ est la matrice de $d^2f_p$ dans la base $(x_{u_i}(q))$, **pas** dans une base orthonormée de $T_pS$ (sur le tore, $x_\theta$ et $x_\varphi$ ont pour normes $a-r$ et $r$).
* Pour classer un point critique : $d^2f_p$ définie positive $\Rightarrow$ minimum local strict ; définie négative $\Rightarrow$ maximum local strict ; non dégénérée de signature mixte $\Rightarrow$ col ; dégénérée $\Rightarrow$ on ne peut pas conclure en général ([[ch09-hessienne-extrema-ordre-deux]]).
