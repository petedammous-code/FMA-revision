---
id: ch02-ouvert-etoile-def
type: definition
chapter: 2
title: Ouvert étoilé
ref: non numéroté, section II.1, p. 36
page: 36
importance: 2
depends: []
tags: [etoile, convexe, simplement-connexe, segment]
---
## Intuition

> 💡 Un ouvert est **étoilé** s'il existe un point $\omega$ depuis lequel on « voit » tout l'ouvert : de $\omega$, on peut atteindre n'importe quel point en ligne droite sans sortir de $\Omega$. Image mentale : une étoile à branches, vue depuis son centre ; ou une pièce éclairée par une seule ampoule placée en $\omega$, sans zone d'ombre.

C'est une condition **géométrique** très simple à vérifier (il suffit d'exhiber $\omega$ et de contrôler des segments), bien plus facile que « simplement connexe » qui est une condition **topologique** (il faut contracter *tous* les lacets). Son intérêt : étoilé $\Rightarrow$ simplement connexe ([[ch02-etoile-simplement-connexe]]), ce qui fournit presque tous les ouverts simplement connexes utilisés en pratique.

Notation : pour $a,b\in\C$, le **segment** $[a,b]$ est l'ensemble $\{(1-\lambda)a+\lambda b : \lambda\in[0,1]\}$. Une partie $A\subset\C$ est **convexe** si $[a,b]\subset A$ pour tous $a,b\in A$.

## Énoncé

**Définition (poly, section II.1, p. 36, non numérotée).** Un ouvert $\Omega$ de $\C$ est dit **étoilé** s'il existe $\omega\in\Omega$ tel que pour tout $z\in\Omega$ le segment $[\omega,z]$ est contenu dans $\Omega$. On dit alors que $\Omega$ est **étoilé en $\omega$**.

En particulier, un ouvert convexe est étoilé (en chacun de ses points).

## Hypothèses

### H1 — $\Omega$ est un ouvert et $\omega\in\Omega$

**Rôle.** Le point $\omega$ doit appartenir à $\Omega$ (pour $z=\omega$ le segment est réduit à $\{\omega\}$). L'hypothèse « ouvert » est le cadre du cours (holomorphie, simple connexité) ; la condition géométrique a un sens pour n'importe quelle partie de $\C$.

**Si on la retire.** Si on autorisait $\omega\notin\Omega$, la couronne $\{1<|z|<2\}$ ne serait toujours pas « étoilée en $0$ » (les segments $[0,z]$ passent par le disque $D(0,1)$), mais $D(0,1)\setminus\{0\}$ le serait, alors qu'il n'est pas simplement connexe ([[ch02-homotopie-simplement-connexe]]) : la proposition « étoilé $\Rightarrow$ simplement connexe » tomberait.

## Exemples

1. **Convexes.** Un disque $D(z_0,r)$ est convexe : si $|a-z_0|<r$ et $|b-z_0|<r$, alors $|(1-\lambda)a+\lambda b-z_0|\le(1-\lambda)|a-z_0|+\lambda|b-z_0|<r$. De même un demi-plan $\{\Re(z)>0\}$, $\{\Im(z)>0\}$, une bande $\{0<\Im(z)<\pi\}$, un rectangle ouvert, $\C$. Tous sont étoilés en chacun de leurs points.

2. **Le plan coupé $\C\setminus\R_-$ est étoilé en $1$** (mais pas convexe : $[-1+i,-1-i]$ passe par $-1$). Vérification : soit $z\in\C\setminus\R_-$ et $w=(1-\lambda)+\lambda z$ avec $\lambda\in[0,1]$. Si $\Im(z)\ne0$, alors $\Im(w)=\lambda\Im(z)$ est nul seulement pour $\lambda=0$, où $w=1\notin\R_-$ ; sinon $w\notin\R$. Si $\Im(z)=0$, alors $z=x>0$ et $w=(1-\lambda)+\lambda x>0$. Dans tous les cas $w\notin\R_-$. C'est l'ouvert sur lequel vit la détermination principale du logarithme ([[ch02-logarithme-determination-principale-def]]). Plus généralement $\C$ privé d'une demi-droite fermée issue de $0$ est étoilé en tout point de la demi-droite opposée.

3. **Le disque $D(1,1)$** (utilisé dans la preuve de Rouché, [[ch02-rouche]]) est convexe donc étoilé ; il ne contient pas $0$.

4. **Non-exemples.** 
   * $\C\setminus\{0\}$ et la couronne $\{1<|z|<2\}$ ne sont étoilés en aucun point : si $\omega$ est dans l'un de ces ouverts, $z=-\omega$ y est aussi (même module), et le segment $[\omega,-\omega]$ contient $0$, qui n'y est pas.
   * **La réciproque de « étoilé $\Rightarrow$ simplement connexe » est fausse.** Le « fer à cheval » $\Omega=\{z : 1<|z|<2,\ \Im(z)>0\}$ (demi-couronne) est simplement connexe mais n'est pas étoilé. *Non étoilé :* supposons $\Omega$ étoilé en $\omega$. Les points $z_\eps=(1+\eps)e^{i\eps}\in\Omega$ tendent vers $1$ quand $\eps\to0^+$, et $[\omega,z_\eps]\subset\Omega$ ; par passage à la limite, $[\omega,1]\subset\bar\Omega\subset\{|z|\ge1\}$. Or pour $\lambda>0$ petit, $|1+\lambda(\omega-1)|^2=1+2\lambda\Re(\omega-1)+\lambda^2|\omega-1|^2$ est $<1$ dès que $\Re(\omega-1)<0$ ; donc $\Re(\omega)\ge1$. Le même raisonnement avec $z'_\eps=(1+\eps)e^{i(\pi-\eps)}\to-1$ donne $\Re(\omega)\le-1$ : contradiction. *Simplement connexe :* l'application $\Phi:(r,\theta)\mapsto re^{i\theta}$ est un homéomorphisme du rectangle ouvert $R=\,]1,2[\,\times\,]0,\pi[$ sur $\Omega$ (réciproque $z\mapsto(|z|,\arg z)$ avec l'argument principal, continu sur $\C\setminus\R_-\supset\Omega$). Si $\gamma_0$ est un lacet de $\Omega$, $\Phi^{-1}\circ\gamma_0$ est un lacet continu du convexe $R$, que l'homotopie linéaire $(s,t)\mapsto(1-s)\Phi^{-1}(\gamma_0(t))+s\,(\tfrac32,\tfrac\pi2)$ contracte sur un point dans $R$ ; en composant par $\Phi$ on obtient une homotopie de lacets dans $\Omega$ entre $\gamma_0$ et le lacet constant $\tfrac32 i$. Et $\Omega$ est connexe (image continue du connexe $R$).

## Pièges

* > ⚠️ Étoilé $\Rightarrow$ simplement connexe, mais **pas réciproquement** (exemple 4). Pour montrer qu'un ouvert est simplement connexe, « étoilé » est un outil suffisant ; pour montrer qu'il ne l'est pas, « non étoilé » ne prouve rien.
* « Étoilé » demande un point $\omega$ **fixé** qui voit tout le monde ; « tout point voit un voisinage de lui-même » est vrai pour n'importe quel ouvert et ne sert à rien.
* Le centre $\omega$ n'est pas unique en général (un convexe est étoilé en chacun de ses points) et il doit être choisi astucieusement : $\C\setminus\R_-$ est étoilé en $1$ mais **pas en $i$**, car le segment $[i,-1-i]$, dont le point de paramètre $\lambda=\tfrac12$ est $\tfrac12 i+\tfrac12(-1-i)=-\tfrac12\in\R_-$, sort de l'ouvert.
* Convexe $\Rightarrow$ étoilé, mais $\C\setminus\R_-$ est étoilé sans être convexe.
